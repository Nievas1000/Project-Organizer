import { IoMdClose } from 'react-icons/io'
import './index.css'
import axios from 'axios'
import { useContext } from 'react'
import { ProjectContext } from '../../../../context/project'

export const DeleteParticipantModal = ({ setShowDeleteModal, participant }) => {
  const { setParticipants, selectedProject } = useContext(ProjectContext)

  const deleteParticipant = async () => {
    try {
      const response = await axios.post('http://localhost:3001/removeProject', { userId: participant._id, projectId: selectedProject._id })
      if (response.status === 200) {
        setParticipants((prevParticpants) => prevParticpants.filter((currentParticipant) => currentParticipant._id !== participant._id))
        setShowDeleteModal(false)
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
          <h3 className='m-4 text-center'>Are you sure you want to remove {participant.name} from the project?</h3>
          <div className='d-flex justify-content-center align-items-center mt-5 gap-4'>
            <button className='btn btn-danger' onClick={deleteParticipant}>Remove</button>
            <button className='btn btn-dark' onClick={() => setShowDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
