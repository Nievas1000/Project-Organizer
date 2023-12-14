import { useLogin } from '../../../hooks/useLogin'

export const Form = () => {
  const { showPasswordInput, handleContinue, handlePasswordChange, handleLogin, user, setUser, passwordExist } = useLogin()
  return (
    <div>
      {showPasswordInput
        ? (
          <input
            type='password'
            className='input-login'
            placeholder={passwordExist ? 'Enter password' : 'Create a password to your account'}
            value={user.password}
            onChange={handlePasswordChange}
          />
          )
        : (
          <input
            type='text'
            className='input-login'
            placeholder='Enter email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          )}
      <button className='btn btn-dark w-100 mt-4' onClick={showPasswordInput ? handleLogin : handleContinue}>
        {showPasswordInput ? 'Login' : 'Continue'}
      </button>
    </div>
  )
}
