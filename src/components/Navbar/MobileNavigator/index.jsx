import { Link } from 'react-router-dom'
import './index.css'
import { useContext, useState } from 'react'
import { ProjectContext } from '../../../context/project'
import { CreateProjectModal } from '../CreateProject'

export const MobileNavigator = () => {
  const [showCreateProject, setCreateProject] = useState(false)
  const { showBoardMobile, setShowBoardMobile } = useContext(ProjectContext)

  const createIssue = () => {
    setCreateProject(true)
  }
  return (
    <div className={`mobile-menu ${showBoardMobile ? 'open' : 'close'}`}>
      <span className='close-btn' onClick={() => setShowBoardMobile(false)}>
        &times;
      </span>
      <div className='d-flex justify-content-center align-items-center h-100'>
        <ul>
          <li onClick={createIssue}>
            Create Project
          </li>
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
      {showCreateProject && <CreateProjectModal setCreateProject={setCreateProject} />}
    </div>
  )
}
