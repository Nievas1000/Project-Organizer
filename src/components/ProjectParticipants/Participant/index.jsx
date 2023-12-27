import { useState } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { DeleteParticipantModal } from './DeleteParticipantModal'
import axios from 'axios'

export const Participant = ({ participant, isAdmin, selectedProject }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [participantAdmin, setParticipantAdmin] = useState(selectedProject?.admins.includes(participant.email))

  const addAdmin = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/addAdmin/${selectedProject._id}`, { email: participant.email })
      console.log(response)
      if (response.status === 200) {
        setParticipantAdmin(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='participant-item mt-4'>
      <FaUserTie className='participant-icon' />
      <div>
        <p className='participant-name'>{participant.name}</p>
        <p className='participant-email'>{participant.email}</p>
      </div>
      {isAdmin &&
        <div className='position-absolute end-0'>
          {!participantAdmin && <button className='btn btn-secondary me-2' onClick={addAdmin}>Set Admin</button>}
          <button className='btn btn-danger me-5' onClick={() => setShowDeleteModal(true)}>Remove</button>
        </div>}
      {showDeleteModal && <DeleteParticipantModal participant={participant} setShowDeleteModal={setShowDeleteModal} />}
    </div>
  )
}
