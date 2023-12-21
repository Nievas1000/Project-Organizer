import { useContext, useState } from 'react'
import { ProjectContext } from '../context/project'

export const useEditInfo = () => {
  const [comment, setComment] = useState('')
  const { selectedProject } = useContext(ProjectContext)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedTitle, setEditedTitle] = useState()
  const [editedDescription, setEditedDescription] = useState()

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
    handleCancelClick
  }
}
