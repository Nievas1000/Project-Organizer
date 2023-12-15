import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import { ProjectContext } from '../context/project'

export const useNavbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const [showCreateProject, setCreateProject] = useState(false)
  const { setIsAuthenticated, user } = useAuth()
  const { projects, setSelectedProject, selectedProject, showBoardMobile, setShowBoardMobile } = useContext(ProjectContext)

  const selectProject = (project) => {
    setSelectedProject(project)
    setShowMenu(!showMenu)
  }

  const signOut = () => {
    document.cookie = 'token=; max-age=0'
    localStorage.clear()
    setIsAuthenticated(false)
    navigate('/login')
  }

  return { selectProject, signOut, showCreateProject, setCreateProject, projects, setSelectedProject, selectedProject, showBoardMobile, setShowBoardMobile, user }
}
