import { useGoogleOneTapLogin } from '@react-oauth/google'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { saveToLocalStorage } from '../utils/localStorage'

export const useLogin = () => {
  const navigate = useNavigate()
  const { setIsAuthenticated, setUser } = useAuth()
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [passwordExist, setPasswordExist] = useState(true)
  const [error, setError] = useState()
  const [user, setUserData] = useState({
    email: '',
    password: ''
  })

  useGoogleOneTapLogin({
    onSuccess: async credentialResponse => {
      const credentialDecode = jwtDecode(credentialResponse.credential)
      const response = await axios.post('http://localhost:3001/userByEmail', { email: credentialDecode.email, isExternal: true })
      const data = response.data
      if (response.status === 200 && data.exist === true) {
        document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
        saveToLocalStorage('user', response.data.user)
        setUser(response.data.user)
        setIsAuthenticated(true)
        navigate('/home')
      }
    },
    onError: () => {
      console.log('Login Failed')
    }
  })

  const handleContinue = async () => {
    if (user.email !== '' && user.email.length > 12) {
      setError(null)
      const response = await axios.post('http://localhost:3001/userByEmail', { email: user.email })
      const data = response.data
      if (data.exist === true) {
        setShowPasswordInput(true)
      } else {
        setError('Doesn`t exist an user with this email!')
      }
      if (data.password === false) {
        setPasswordExist(false)
      }
    } else {
      setError('Enter a valid Email!')
    }
  }

  const handlePasswordChange = (e) => {
    setUserData({ ...user, password: e.target.value })
  }

  const handleLogin = async () => {
    if (user.password !== '' && user.password.length > 5) {
      let response = null
      if (passwordExist) {
        response = await axios.post('http://localhost:3001/login', user)
      } else {
        response = await axios.put('http://localhost:3001/addPassword', { email: user.email, password: user.password })
      }
      if (response.status === 200) {
        document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
        saveToLocalStorage('user', response.data.user)
        setUser(response.data.user)
        setIsAuthenticated(true)
        navigate('/home')
        setError(null)
      }
    } else {
      setError('Enter a password of more than 5 characters!')
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    const credentialDecode = jwtDecode(credentialResponse.credential)
    const response = await axios.post('http://localhost:3001/userByEmail', { email: credentialDecode.email, isExternal: true })
    const data = response.data
    if (response.status === 200 && data.exist === true) {
      document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
      saveToLocalStorage('user', response.data.user)
      setUser(response.data.user)
      setIsAuthenticated(true)
      navigate('/home')
    }
  }

  return { showPasswordInput, handleContinue, handlePasswordChange, handleLogin, handleGoogleLogin, user, setUserData, passwordExist, error }
}
