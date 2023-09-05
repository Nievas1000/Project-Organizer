import { createContext, useState } from 'react'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(['Project1', 'Project2', 'Project3'])
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Crear página de inicio', status: 'En progreso' },
    { id: 2, title: 'Implementar funcionalidad de usuario', status: 'Pendiente' },
    { id: 3, title: 'Pruebas de unidad', status: 'Completada' }
  ])

  const contextValue = {
    projects,
    tasks,
    setProjects,
    setTasks
  }

  return (
    <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
  )
}
