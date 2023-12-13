import { GoogleLogin } from '@react-oauth/google'
import './index.css'
import logo from '../../assets/logo.png'
import { Form } from './Form'
import { useLogin } from '../../hooks/useLogin'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { showPasswordInput, handleGoogleLogin } = useLogin()

  return (
    <div className='d-flex justify-content-center align-items-center h-100 '>
      <div className='container-login d-flex justify-content-center '>
        <div style={{ width: '80%' }}>
          <div>
            <div className='d-flex justify-content-center'>
              <img src={logo} width={150} height={100} alt='Logo' />
            </div>
            <h5 className='d-flex justify-content-center'>
              {showPasswordInput ? 'Enter your password' : 'Login in to your account'}
            </h5>
            <Form />
          </div>
          <span className='d-flex justify-content-center mt-5'>Or</span>
          <div className='d-flex justify-content-center mt-2'>
            <GoogleLogin
              theme='filled_black'
              text='continue_with'
              locale='en_EN'
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </div>
          <Link className='d-flex justify-content-center mt-4 create-account' to='/signup'>Create an account</Link>
        </div>
      </div>
    </div>
  )
}
