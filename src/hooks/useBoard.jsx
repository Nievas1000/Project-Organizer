import { useContext } from 'react'
import { ProjectContext } from '../context/project'
import axios from 'axios'

export const useBoard = (state) => {
  const { tasks, setTasks } = useContext(ProjectContext)

  const onDragEnterHandler = (event) => {
    event.preventDefault()
    const currentElement = event.target
    currentElement.classList.add('overlapping')
  }

  const onDragOverHandler = (event) => {
    event.preventDefault()
    const currentElement = event.target
    currentElement.classList.add('overlapping')
  }

  const onDropHandler = async (event) => {
    const draggableData = JSON.parse(event.dataTransfer.getData('application/json'))
    const currentElement = event.target
    currentElement.classList.remove('overlapping')
    if (draggableData.state !== state) {
      const taskIndex = tasks.findIndex((taskCurrent) => taskCurrent._id === draggableData.id)
      const updatedTasks = [...tasks]
      tasks[taskIndex].state = state
      setTasks(updatedTasks)
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}updateStatus/${draggableData.id}`, { state })
    }
  }

  const onDragLeaveHandler = (event) => {
    const currentElement = event.target
    currentElement.classList.remove('overlapping')
  }

  return { onDragEnterHandler, onDragOverHandler, onDropHandler, onDragLeaveHandler, tasks }
}
