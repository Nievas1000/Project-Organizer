import { FaRegCircleUser } from 'react-icons/fa6'
import './index.css'
import { useMenu } from '../../../hooks/useMenu'

export const UserMenu = ({ user, signOut }) => {
  const { menuRef, setShowUserMenu, showUserMenu } = useMenu()
  return (
    <div className='d-flex align-items-center position-absolute end-0 user-menu-container' ref={menuRef}>
      <FaRegCircleUser size={30} onClick={() => setShowUserMenu(true)} className={showUserMenu ? 'user-icon-active' : 'user-icon'} />
      {showUserMenu && user && (
        <div className='user-menu'>
          <div className='d-flex container-user'>
            <p className='name'>{user.name}</p>
            <p className='email'>{user.email}</p>
          </div>
          <hr className='my-2 w-100' />
          <span onClick={() => signOut()}>Cerrar Sesión</span>
        </div>
      )}
    </div>
  )
}
