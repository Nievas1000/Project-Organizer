import axios from 'axios'
import { useState } from 'react'
import { getCurrentDate } from '../utils/currentDate'

export const useProject = () => {
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
      const response = await axios.post('http://localhost:3001/project', projectData)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return { handleChange, createProject, projectData }
}
