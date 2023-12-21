import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ProjectContext } from '../../../../context/project'

export const EditInfo = ({ task, editedTitle, setEditedTitle, setEditedDescription, editedDescription, handleCancelClick }) => {
  const [isEdited, setIsEdited] = useState(false)
  const { tasks, setTasks } = useContext(ProjectContext)

  useEffect(() => {
    if (task.name !== editedTitle || task.description !== editedDescription) {
      setIsEdited(true)
    } else {
      setIsEdited(false)
    }
  }, [task, editedTitle, editedDescription])

  const editTask = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/task/${task._id}`, { name: editedTitle, description: editedDescription })
      if (response.status === 200) {
        task.name = editedTitle
        task.description = editedDescription
        handleCancelClick(task)
        const taskIndex = tasks.findIndex((taskCurrent) => taskCurrent._id === task._id)
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex].name = editedTitle
        updatedTasks[taskIndex].description = editedDescription
        setTasks(updatedTasks)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='d-block'>
      <input
        type='text'
        className='form-edit title mb-2 mt-4'
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <div className='d-flex align-items-center' onClick={() => handleCancelClick(task)}>
        <div className='d-inline-flex pointer action-button edit-action'>
          <IoMdClose className='mt-1' size={20} />
          <span className='ms-1'>Cancel</span>
        </div>
      </div>
      <h5 className='text-white mt-5'>Description</h5>
      <textarea
        type='text'
        className='form-edit description mb-2'
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <div className='d-flex justify-content-end'>
        <button className='btn btn-dark' disabled={!isEdited} onClick={editTask}>Save</button>
      </div>
    </div>
  )
}
