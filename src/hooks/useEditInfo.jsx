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
  const [task, setTask] = useState()
  const [owner, setOwner] = useState()
  const [state, setState] = useState()
  const { participants, tasks, setTasks } = useContext(ProjectContext)

  const updateOwner = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/updateOwner/${task._id}`, { email: owner })
      if (response.status === 200) {
        task.owner.email = owner
        task.owner.name = response.data.owner
        const taskIndex = tasks.findIndex((taskCurrent) => taskCurrent._id === task._id)
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex].owner.email = owner
        updatedTasks[taskIndex].owner.name = response.data.owner
        setTasks(updatedTasks)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateStatus = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/updateStatus/${task._id}`, { state })
      if (response.status === 200) {
        task.state = response.data.task.state
        const taskIndex = tasks.findIndex((taskCurrent) => taskCurrent._id === task._id)
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex].state = response.data.task.state
        setTasks(updatedTasks)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const addComment = async (task) => {
    if (comment !== '') {
      try {
        const response = await axios.post(`http://localhost:3001/addComment/${task._id}`, { name: user.name, email: user.email, comment })
        if (response.status === 200) {
          task.comments.push({
            id: response.data.comment.id, name: user.name, email: user.email, comment, date: new Date()
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
    addComment,
    task,
    owner,
    state,
    setTask,
    setOwner,
    setState,
    participants,
    updateOwner,
    updateStatus
  }
}
