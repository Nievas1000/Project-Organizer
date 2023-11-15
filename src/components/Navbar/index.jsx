import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useContext, useState } from 'react'
import './index.css'
import { CreateProjectModal } from './CreateProject'
import { ProjectContext } from '../../context/project'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCreateProject, setCreateProject] = useState(false)
  const { projects, setSelectedProject, selectedProject } = useContext(ProjectContext)

  return (
    <div>
      <div className='navbar-container d-flex pt-3'>
        <div className='d-flex'>
          <p className='pointer' onClick={() => setShowMenu(!showMenu)}>{selectedProject ? selectedProject.name : 'Projects'} {showMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
          {showMenu && (
            <ul className='project-menu'>
              {projects.map((project) => (
                <li key={project._id} onClick={() => setSelectedProject(project)}>{project.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <span onClick={() => setCreateProject(!showCreateProject)} className='create pointer'>Create</span>
        </div>
      </div>
      {showCreateProject && <CreateProjectModal setCreateProject={setCreateProject} />}
    </div>
  )
}
