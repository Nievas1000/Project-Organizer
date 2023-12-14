import { useGoogleOneTapLogin } from '@react-oauth/google'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [passwordExist, setPasswordExist] = useState(true)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  useGoogleOneTapLogin({
    onSuccess: async credentialResponse => {
      const credentialDecode = jwtDecode(credentialResponse.credential)
      const response = await axios.post('http://localhost:3001/userByEmail', { email: credentialDecode.email })
      const data = response.data
      if (response.status === 200 && data.exist === true) {
        document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
        navigate('/home')
      }
    },
    onError: () => {
      console.log('Login Failed')
    }
  })

  const handleContinue = async () => {
    if (user.email !== '') {
      const response = await axios.post('http://localhost:3001/userByEmail', { email: user.email })
      const data = response.data
      if (data.exist === true) {
        setShowPasswordInput(true)
      }
      if (data.password === false) {
        setPasswordExist(false)
      }
    }
  }

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleLogin = async () => {
    let response = null
    if (passwordExist) {
      response = await axios.post('http://localhost:3001/login', user)
    } else {
      response = await axios.put('http://localhost:3001/addPassword', { email: user.email, password: user.password })
    }
    if (response.status === 200) {
      document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
      navigate('/home')
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    const credentialDecode = jwtDecode(credentialResponse.credential)
    const response = await axios.post('http://localhost:3001/userByEmail', { email: credentialDecode.email })
    const data = response.data
    if (response.status === 200 && data.exist === true) {
      document.cookie = `token=${response.data.token}; max-age=${4 * 60 * 60 * 1000}; path=/; samesite=strict`
      navigate('/home')
    }
  }

  return { showPasswordInput, handleContinue, handlePasswordChange, handleLogin, handleGoogleLogin, user, setUser, passwordExist }
}
