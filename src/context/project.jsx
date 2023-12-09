import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState()
  const [selectedProject, setSelectedProject] = useState()
  const [tasks, setTasks] = useState([])
  const [showBoardMobile, setShowBoardMobile] = useState(false)

  const getTasksByProject = async () => {
    try {
      if (selectedProject) {
        const response = await axios.get(`http://localhost:3001/task/${selectedProject._id}`)
        setTasks(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetch('http://localhost:3001/project').then(response => response.json()).then(data => {
      setProjects(data)
      if (data.length > 0) {
        setSelectedProject(data[0])
      }
    })
  }, [])

  useEffect(() => {
    if (selectedProject) {
      getTasksByProject()
    }
  }, [selectedProject])

  const contextValue = {
    projects,
    tasks,
    selectedProject,
    showBoardMobile,
    setProjects,
    setTasks,
    setSelectedProject,
    setShowBoardMobile
  }

  return (
    <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
  )
}
