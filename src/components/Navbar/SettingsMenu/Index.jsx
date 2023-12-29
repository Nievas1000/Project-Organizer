import { SlSettings } from 'react-icons/sl'
import './index.css'
import { useMenu } from '../../../hooks/useMenu'
import { FaFolder, FaTasks } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const SettingsMenu = () => {
  const { menuRef, setShowUserMenu, showUserMenu } = useMenu()
  return (
    <div className='d-flex align-items-center pointer settings-menu-container me-4' ref={menuRef}>
      <SlSettings size={30} onClick={() => setShowUserMenu(true)} className={showUserMenu ? 'settings-icon-active' : 'settings-icon'} />
      {showUserMenu && (
        <div className='settings-menu'>
          <div className='container-settings'>
            <Link to='/projects' className='d-flex align-items-center ms-3 mt-3'>
              <FaFolder size={25} className='mb-3' />
              <p className='ms-3'>Projects</p>
            </Link>
            <hr className='my-2 w-100' />
            <Link className='d-flex align-items-center ms-3 mt-3'>
              <FaTasks size={25} className='mb-3' />
              <p className='ms-3'>Issues</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
