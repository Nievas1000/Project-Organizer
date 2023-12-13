import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useSignUp = () => {
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [userExist, setUserExist] = useState()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: ''
  })

  const handleContinue = async () => {
    if (user.email !== '') {
      const response = await axios.post('http://localhost:3001/userByEmail', { email: user.email })
      const data = response.data
      console.log(data)
      if (data.status === 200 && data.exist === true) {
        setShowPasswordInput(false)
        setUserExist('There is already a user with this email!')
      } else {
        setShowPasswordInput(true)
      }
    }
  }

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleCreateUser = async () => {
    if (user.email !== '' && user.password !== '') {
      const response = await axios.post('http://localhost:3001/user', user)
      if (response.status === 200) {
        navigate('/home')
      }
    }
  }

  const handleGoogleSignup = async (credentialResponse) => {
    const credentialDecode = jwtDecode(credentialResponse.credential)
    const response = await axios.post('http://localhost:3001/userByEmail', { email: credentialDecode.email })
    const data = response.data
    console.log(credentialDecode)
    if (response.status === 200 && data.exist === true) {
      navigate('/home')
    } else {
      const response = await axios.post('http://localhost:3001/user', { email: credentialDecode.email, name: credentialDecode.name, imagen: credentialDecode.imagen })
      if (response.status === 200) {
        navigate('/home')
      }
    }
  }

  return { showPasswordInput, user, setUser, handleContinue, handlePasswordChange, handleCreateUser, userExist, handleGoogleSignup }
}
