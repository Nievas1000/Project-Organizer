import { useContext, useState } from 'react'
import { ProjectContext } from '../context/project'
import axios from 'axios'
import { useAuth } from './useAuth'

export const useEditInfo = () => {
  const [comment, setComment] = useState('')
  const { selectedProject } = useContext(ProjectContext)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedTitle, setEditedTitle] = useState()
  const [editedDescription, setEditedDescription] = useState()
  const { user } = useAuth()

  const addComment = async (task) => {
    if (comment !== '') {
      try {
        const response = await axios.post(`http://localhost:3001/addComment/${task._id}`, { name: user.name, email: user.email, comment })
        console.log(response)
        if (response.status === 200) {
          task.comments.push({
            name: user.name, email: user.email, comment, date: new Date()
          })
          setComment('')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleEditClick = (task) => {
    setIsEditMode(true)
    setEditedTitle(task.name)
    setEditedDescription(task.description)
  }

  const handleSaveClick = () => {
    setIsEditMode(false)
  }

  const handleCancelClick = (task) => {
    setIsEditMode(false)
    setEditedTitle(task.name)
    setEditedDescription(task.description)
  }

  return {
    comment,
    setComment,
    selectedProject,
    isEditMode,
    setIsEditMode,
    editedTitle,
    setEditedTitle,
    editedDescription,
    setEditedDescription,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
    addComment
  }
}
