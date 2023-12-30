import axios from 'axios'
import { useState } from 'react'

export const useIssue = (task, setShowModal) => {
  const [editedTask, setEditedTask] = useState({
    owner: task.owner,
    name: task.name,
    description: task.description,
    state: task.state
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }))
  }

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}task/${task._id}`, editedTask)
      if (response.status === 200) {
        task.owner = editedTask.owner
        task.name = editedTask.name
        task.description = editedTask.description
        task.state = editedTask.state
        setShowModal(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { handleInputChange, handleSaveChanges, editedTask }
}
