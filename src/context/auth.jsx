import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const tokenMatch = document.cookie.match(/token=([^;]*)/)
        if (tokenMatch && tokenMatch[1]) {
          const token = tokenMatch[1]
          const response = await fetch('http://localhost:3001/checkLogin', {
            method: 'POST',
            headers: {
              Authorization: token
            }
          })

          if (response.ok) {
            setIsAuthenticated(true)
          } else {
            setIsAuthenticated(false)
            navigate('/login')
          }
        } else {
          setIsAuthenticated(false)
          navigate('/login')
        }
      } catch (error) {
        console.error('Error al verificar la autenticación:', error)
        setIsAuthenticated(false)
      }
    }

    checkAuthentication()
  }, []) //eslint-disable-line

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
  )
}
