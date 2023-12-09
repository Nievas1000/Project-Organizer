import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useContext, useState } from 'react'
import './index.css'
import { CreateProjectModal } from './CreateProject'
import { ProjectContext } from '../../context/project'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MobileNavigator } from './MobileNavigator'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCreateProject, setCreateProject] = useState(false)
  const { projects, setSelectedProject, selectedProject, showBoardMobile, setShowBoardMobile } = useContext(ProjectContext)

  const selectProject = (project) => {
    setSelectedProject(project)
    setShowMenu(!showMenu)
  }

  return (
    <div>
      <div className='navbar-container d-flex pt-3'>
        <div>
          <img src={logo} height={80} width={100} />
        </div>
        <div className='d-flex align-items-center'>
          <div className='d-flex ms-5'>
            <p className='pointer' onClick={() => setShowMenu(!showMenu)}>{selectedProject ? selectedProject.name : 'Projects'} {showMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
            {showMenu && (
              <ul className='project-menu'>
                {projects.map((project) => (
                  <li key={project._id} onClick={() => selectProject(project)}>{project.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className='ms-4 d-none d-md-block'>
            <span onClick={() => setCreateProject(!showCreateProject)} className='create pointer'>Create</span>
          </div>
        </div>
        <div className='position-absolute end-0 me-3 mt-3 d-bloc d-md-none pointer'>
          <GiHamburgerMenu size={30} onClick={() => setShowBoardMobile(!showBoardMobile)} />
        </div>
      </div>
      {showBoardMobile && <MobileNavigator />}
      {showCreateProject && <CreateProjectModal setCreateProject={setCreateProject} />}
    </div>
  )
}
