import { useContext, useState } from 'react'
import { ProjectContext } from '../context/project'
import axios from 'axios'

export const useCreateIssue = (setCreateIssue) => {
  const { selectedProject, setTasks, participants } = useContext(ProjectContext)
  const [issue, setIssue] = useState({
    name: '',
    description: '',
    state: 'TO DO',
    projectId: selectedProject ? selectedProject._id : null,
    owner: ''
  })
  const [apiError, setApiError] = useState('')
  const [error, setError] = useState({
    exist: false,
    fields: {
      name: '',
      description: '',
      owner: ''
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setIssue({ ...issue, [name]: value })
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

  const createIssue = async () => {
    if (issue.name !== '' && issue.description !== '' && issue.owner !== '') {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}task`, issue)
        if (response.status === 200) {
          setCreateIssue(false)
          setTasks(response.data.tasks)
        }
      } catch (error) {
        console.log(error)
        setApiError(error.response.data.error)
      }
    } else {
      error.exist = true
      if (issue.name === '') {
        updateErrorFields('name', 'You must enter a name!')
      }
      if (issue.description === '') {
        updateErrorFields('description', 'You must enter a description!')
      }
      if (!issue.endDate) {
        updateErrorFields('owner', 'You must enter an owner!')
      }
    }
  }

  return { error, issue, handleChange, participants, apiError, createIssue }
}
