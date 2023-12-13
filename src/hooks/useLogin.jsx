import { useGoogleOneTapLogin } from '@react-oauth/google'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
  const [showPasswordInput, setShowPasswordInput] = useState(false)
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
    }
  }

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:3001/login', user)
    if (response.status === 200) {
      navigate('/home')
    }
  }

  const handleGoogleLogin = async (credentialResponse) => {
    const credentialDecode = jwtDecode(credentialResponse.credential)
    const response = await axios.post('http://localhost:3001/userByEmail', { email: credentialDecode.email })
    const data = response.data
    if (response.status === 200 && data.exist === true) {
      navigate('/home')
    }
  }

  return { showPasswordInput, handleContinue, handlePasswordChange, handleLogin, handleGoogleLogin, user, setUser }
}
