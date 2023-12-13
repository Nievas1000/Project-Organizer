import { GoogleLogin } from '@react-oauth/google'
import './index.css'
import logo from '../../assets/logo.png'
import { Form } from './Form'
import { Link } from 'react-router-dom'
import { useSignUp } from '../../hooks/useSignUp'

export const SignUp = () => {
  const { showPasswordInput, handleGoogleSignup } = useSignUp()

  return (
    <div className='d-flex justify-content-center align-items-center h-100 '>
      <div className='container-signup d-flex justify-content-center '>
        <div style={{ width: '80%' }}>
          <div>
            <div className='d-flex justify-content-center'>
              <img src={logo} width={150} height={100} alt='Logo' />
            </div>
            <h5 className='d-flex justify-content-center'>
              {showPasswordInput ? 'Enter your password' : 'Create your account'}
            </h5>
            <Form />
          </div>
          <span className='d-flex justify-content-center mt-5'>Or</span>
          <div className='d-flex justify-content-center mt-2'>
            <GoogleLogin
              theme='filled_black'
              text='continue_with'
              locale='en_EN'
              onSuccess={handleGoogleSignup}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </div>
          <Link className='d-flex justify-content-center mt-4 login' to='/login'>Already have an Kira account? Log in</Link>
        </div>
      </div>
    </div>
  )
}
