import './index.css'
import { CreateProjectModal } from './CreateProject'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MobileNavigator } from './MobileNavigator'
import { useNavbar } from '../../hooks/useNavbar'
import { UserMenu } from './UserMenu'
export const Navbar = () => {
  const { selectProject, signOut, showCreateProject, setCreateProject, projects, selectedProject, showBoardMobile, setShowBoardMobile, user } = useNavbar()
  return (
    <div>
      <div className='navbar-container d-flex pt-3'>
        <div className='ms-4'>
          <img src={logo} height={80} width={100} />
        </div>
        <div className='d-flex align-items-center'>
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
          </div>
          <div className='d-none d-md-flex align-items-center'>
            <span onClick={() => setCreateProject(!showCreateProject)} className='create pointer'>Create</span>
          </div>
          <UserMenu user={user} signOut={signOut} />
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
