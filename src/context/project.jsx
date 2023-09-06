import { createContext, useEffect, useState } from 'react'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState()
  const [selectedProject, setSelectedProject] = useState()
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Crear página de inicio', status: 'En progreso' },
    { id: 2, title: 'Implementar funcionalidad de usuario', status: 'Pendiente' },
    { id: 3, title: 'Pruebas de unidad', status: 'Completada' }
  ])

  useEffect(() => {
    fetch('http://localhost:3001/project').then(response => response.json()).then(data => setProjects(data))
  }, [])

  const contextValue = {
    projects,
    tasks,
    selectedProject,
    setProjects,
    setTasks,
    setSelectedProject
  }

  return (
    <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
  )
}
