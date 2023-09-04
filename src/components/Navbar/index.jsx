import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useState } from 'react'
import './index.css'
import { CreateProjectModal } from './CreateProject'

const projects = ['Project1', 'Project2', 'Project3']

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCreateProject, setCreateProject] = useState(false)

  return (
    <div>
      <div className='navbar-container d-flex pt-3'>
        <div className='d-flex'>
          <p className='pointer' onClick={() => setShowMenu(!showMenu)}>Projects {showMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</p>
          {showMenu && (
            <ul className='project-menu'>
              {projects.map((project, index) => (
                <li key={index}>{project}</li>
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
