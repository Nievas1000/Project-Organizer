import { useLogin } from '../../../hooks/useLogin'

export const Form = () => {
  const { showPasswordInput, handleContinue, handlePasswordChange, handleLogin, user, setUserData, passwordExist, error } = useLogin()
  return (
    <div>
      {showPasswordInput
        ? (
          <input
            type='password'
            className='input-login mt-2'
            placeholder={passwordExist ? 'Enter password' : 'Create a password to your account'}
            value={user.password}
            onChange={handlePasswordChange}
          />
          )
        : (
          <input
            type='text'
            className='input-login mt-2'
            placeholder='Enter email'
            value={user.email}
            onChange={(e) => setUserData({ ...user, email: e.target.value })}
          />
          )}
      {error && <span className='error-message'>{error}</span>}
      <button className='btn btn-dark w-100 mt-4' onClick={showPasswordInput ? handleLogin : handleContinue}>
        {showPasswordInput ? 'Login' : 'Continue'}
      </button>
    </div>
  )
}
