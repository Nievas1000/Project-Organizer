import { IoMdClose } from 'react-icons/io'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ProjectContext } from '../../../../../context/project'

export const DeleteProjectModal = ({ setShowDeleteModal, project }) => {
  const navigate = useNavigate()
  const { setProjects } = useContext(ProjectContext)

  const deleteProject = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/project/${project._id}`)
      if (response.status === 200) {
        setProjects((prevProejcts) => prevProejcts.filter((projectsCurrent) => projectsCurrent._id !== project._id))
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
          <h3 className='m-4 text-center'>Are you sure you want to delete the project?</h3>
          <div className='d-flex justify-content-center align-items-center mt-5 gap-4'>
            <button className='btn btn-danger' onClick={deleteProject}>Delete</button>
            <button className='btn btn-dark' onClick={() => setShowDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
