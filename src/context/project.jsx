import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState()
  const [selectedProject, setSelectedProject] = useState()
  const [tasks, setTasks] = useState([])
  const [showBoardMobile, setShowBoardMobile] = useState(false)
  const [participants, setParticipants] = useState()
  const { user } = useAuth()

  const getTasksByProject = async () => {
    try {
      if (selectedProject) {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}task/${selectedProject._id}`)
        setTasks(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getUsersByProject = async () => {
    try {
      if (selectedProject) {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}usersByProject/${selectedProject._id}`)
        setParticipants(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      fetch(`${import.meta.env.VITE_API_BASE_URL}projects/${user.id}`).then(response => response.json()).then(data => {
        setProjects(data)
        if (data.length > 0) {
          setSelectedProject(data[0])
        }
      })
    }
  }, [user])

  useEffect(() => {
    if (selectedProject) {
      getTasksByProject()
      getUsersByProject()
    }
  }, [selectedProject])

  const contextValue = {
    projects,
    tasks,
    selectedProject,
    showBoardMobile,
    participants,
    setProjects,
    setTasks,
    setSelectedProject,
    setShowBoardMobile,
    setParticipants
  }

  return (
    <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
  )
}
