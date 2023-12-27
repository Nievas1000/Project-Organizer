import axios from 'axios'
import { useContext, useState } from 'react'
import { getCurrentDate } from '../utils/currentDate'
import { useAuth } from './useAuth'
import { ProjectContext } from '../context/project'

export const useProject = (setCreateProject) => {
  const { user } = useAuth()
  const { setProjects } = useContext(ProjectContext)
  const [error, setError] = useState({
    exist: false,
    fields: {
      name: '',
      description: '',
      endDate: ''
    }
  })
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
    updateErrorFields([name], '')
  }

  const updateErrorFields = (field, value) => {
    setError(prevError => ({
      ...prevError,
      fields: {
        ...prevError.fields,
        [field]: value
      }
    }))
  }
  const createProject = async () => {
    if (projectData.name !== '' && projectData.description !== '' && projectData.endDate !== '') {
      try {
        setProjects(projectData)
        projectData.userId = user.id
        const response = await axios.post('http://localhost:3001/project', projectData)
        if (response.status === 200) {
          setCreateProject(false)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      error.exist = true
      if (projectData.name === '') {
        updateErrorFields('name', 'You must enter a name!')
      }
      if (projectData.description === '') {
        updateErrorFields('description', 'You must enter a description!')
      }
      if (!projectData.endDate) {
        updateErrorFields('endDate', 'You must enter an end date!')
      }
    }
  }

  return { handleChange, createProject, projectData, error }
}
