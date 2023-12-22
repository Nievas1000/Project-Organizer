import { useSignUp } from '../../../hooks/useSignUp'

export const Form = () => {
  const { showPasswordInput, handleContinue, handlePasswordChange, handleCreateUser, user, setUserData, error } = useSignUp()
  return (
    <div>
      {showPasswordInput
        ? (
          <div>
            <input
              type='text'
              className='input-signup'
              placeholder='Enter you name'
              value={user.name}
              onChange={(e) => setUserData({ ...user, name: e.target.value })}
            />
            <input
              type='password'
              className='input-signup'
              placeholder='Enter password'
              value={user.password}
              onChange={handlePasswordChange}
            />
          </div>
          )
        : (
          <input
            type='text'
            className='input-signup'
            placeholder='Enter email'
            value={user.email}
            onChange={(e) => setUserData({ ...user, email: e.target.value })}
          />
          )}
      {error && <span className='error-message'>{error}</span>}
      <button className='btn btn-dark w-100 mt-4' onClick={showPasswordInput ? handleCreateUser : handleContinue}>
        {showPasswordInput ? 'Sign up' : 'Continue'}
      </button>
    </div>
  )
}
