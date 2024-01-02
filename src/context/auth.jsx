import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getFromLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const tokenMatch = document.cookie.match(/token=([^;]*)/)
        const storedUser = getFromLocalStorage('user')
        if (tokenMatch && tokenMatch[1] && storedUser) {
          setUser(storedUser)
          const token = tokenMatch[1]
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}checkLogin`, {
            method: 'POST',
            headers: {
              Authorization: token
            }
          })

          if (response.ok) {
            setIsAuthenticated(true)
            navigate(location.pathname)
          } else {
            setIsAuthenticated(false)
            navigate(location.pathname)
          }
        } else {
          setIsAuthenticated(false)
          navigate(location.pathname)
        }
      } catch (error) {
        console.error('Error al verificar la autenticación:', error)
        setIsAuthenticated(false)
      }
    }

    checkAuthentication()
  }, []) //eslint-disable-line

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>{children}</AuthContext.Provider>
  )
}
