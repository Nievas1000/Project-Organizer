import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import { saveToLocalStorage } from '../utils/localStorage'

export const useSignUp = () => {
  const { setIsAuthenticated, setUser } = useAuth()
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [error, setError] = useState()
  const navigate = useNavigate()
  const [user, setUserData] = useState({
    email: '',
    name: '',
    password: ''
  })

  const handleContinue = async () => {
    if (user.email !== '') {
      try {
        const response = await axios.post('http://localhost:3001/userByEmail', { email: user.email })
        const data = response.data
        if (data.exist === true) {
          setShowPasswordInput(false)
          setError('There is already a user with this email!')
        } else {
          setError(null)
          setShowPasswordInput(true)
        }
      } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      }
    }
  }

  const handlePasswordChange = (e) => {
    setUserData({ ...user, password: e.target.value })
  }

  const handleCreateUser = async () => {
    console.log(user)
    if (user.name !== '' && user.password !== '') {
      try {
        const response = await axios.post('http://localhost:3001/user', user)
        if (response.status === 200) {
          document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
          setIsAuthenticated(true)
          saveToLocalStorage('user', response.data.user)
          setUser(response.data.user)
          navigate('/home')
        }
      } catch (error) {
        console.log(error)
        setError(error.response.data.message)
      }
    } else {
      setError('The name or password value is invalid!')
    }
  }

  const handleGoogleSignup = async (credentialResponse) => {
    try {
      const credentialDecode = jwtDecode(credentialResponse.credential)
      let response = await axios.post('http://localhost:3001/userByEmail', { email: credentialDecode.email, isExternal: true })
      const data = response.data
      if (data.exist === true) {
        document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
        setIsAuthenticated(true)
        saveToLocalStorage('user', response.data.user)
        setUser(response.data.user)
        navigate('/home')
      } else {
        response = await axios.post('http://localhost:3001/user', { email: credentialDecode.email, name: credentialDecode.name, imagen: credentialDecode.imagen })
        if (response.status === 200) {
          document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
          setIsAuthenticated(true)
          saveToLocalStorage('user', response.data.user)
          setUser(response.data.user)
          navigate('/home')
        }
      }
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }

  return { showPasswordInput, user, setUserData, handleContinue, handlePasswordChange, handleCreateUser, error, handleGoogleSignup }
}
