import { Link } from 'react-router-dom'
import './index.css'
import { useContext } from 'react'
import { ProjectContext } from '../../../context/project'

export const MobileNavigator = () => {
  const { showBoardMobile, setShowBoardMobile } = useContext(ProjectContext)
  return (
    <div className={`mobile-menu ${showBoardMobile ? 'open' : 'close'}`}>
      <span className='close-btn' onClick={() => setShowBoardMobile(false)}>
        &times;
      </span>
      <div className='d-flex justify-content-center align-items-center h-100'>
        <ul>
          <li>
            <Link to='/' onClick={() => setShowBoardMobile(false)}>
              Backlog
            </Link>
          </li>
          <li>
            <Link to='/board' onClick={() => setShowBoardMobile(false)}>
              Board
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
