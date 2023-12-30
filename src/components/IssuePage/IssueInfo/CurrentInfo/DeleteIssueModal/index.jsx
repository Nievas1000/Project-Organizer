import { IoMdClose } from 'react-icons/io'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../../../../../context/project'

export const DeleteIssueModal = ({ setShowDeleteModal, task }) => {
  const navigate = useNavigate()
  const { setTasks } = useContext(ProjectContext)

  const deleteTask = async () => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}task/${task._id}`)
      if (response.status === 200) {
        setTasks((prevTasks) => prevTasks.filter((currentTask) => currentTask._id !== task._id))
        navigate(-1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container-delete-task'>
      <div className='delete-task'>
        <div>
          <div className='close-modal'>
            <IoMdClose className='pointer' onClick={() => setShowDeleteModal(false)} />
          </div>
          <h3 className='m-4 text-center'>Are you sure you want to delete the task?</h3>
          <div className='d-flex justify-content-center align-items-center mt-5 gap-4'>
            <button className='btn btn-danger' onClick={deleteTask}>Delete</button>
            <button className='btn btn-dark' onClick={() => setShowDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
