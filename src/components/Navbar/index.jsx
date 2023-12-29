import './index.css'
import { CreateProjectModal } from './CreateProject'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MobileNavigator } from './MobileNavigator'
import { useNavbar } from '../../hooks/useNavbar'
import { UserMenu } from './UserMenu'
import { SettingsMenu } from './SettingsMenu/Index'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { selectProject, signOut, showCreateProject, setCreateProject, projects, selectedProject, showBoardMobile, setShowBoardMobile, user } = useNavbar()

  return (
    <div>
      <div className='navbar-container d-flex pt-3'>
        <Link to='/home' className='ms-4'>
          <img src={logo} height={80} width={100} />
        </Link>
        <div className='d-flex align-items-center'>
          {projects && projects.length > 0 &&
            <div className='d-none d-md-flex ms-5'>
              <select
                className='pointer'
                value={selectedProject ? selectedProject._id : ''}
                onChange={(e) => {
                  const selectedProject = projects.find((project) => project._id === e.target.value)
                  selectProject(selectedProject)
                }}
              >
                {projects?.map((project) => (
                  <option key={project._id} value={project._id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>}
          <div className='d-none d-md-flex align-items-center'>
            <span onClick={() => setCreateProject(!showCreateProject)} className='create pointer'>Create</span>
          </div>
          <div className='d-flex align-items-center position-absolute end-0 me-4'>
            <SettingsMenu />
            <UserMenu user={user} signOut={signOut} />
          </div>
        </div>
        <div className='position-absolute end-0 me-3 mt-4 d-block d-md-none pointer'>
          <GiHamburgerMenu size={30} onClick={() => setShowBoardMobile(!showBoardMobile)} />
        </div>
      </div>
      {showBoardMobile && <MobileNavigator />}
      {showCreateProject && <CreateProjectModal setCreateProject={setCreateProject} />}
    </div>
  )
}
