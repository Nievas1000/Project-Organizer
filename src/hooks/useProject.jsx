import axios from 'axios'
import { useContext, useState } from 'react'
import { getCurrentDate } from '../utils/currentDate'
import { useAuth } from './useAuth'
import { ProjectContext } from '../context/project'

export const useProject = () => {
  const { user } = useAuth()
  const { setProjects } = useContext(ProjectContext)
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    startDate: getCurrentDate(),
    endDate: null,
    state: 'In progress'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProjectData({ ...projectData, [name]: value })
  }

  const createProject = async () => {
    try {
      setProjects(projectData)
      projectData.userId = user.id
      const response = await axios.post('http://localhost:3001/project', projectData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return { handleChange, createProject, projectData }
}
