import { useState } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { DeleteParticipantModal } from './DeleteParticipantModal'

export const Participant = ({ participant }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  return (
    <div className='participant-item mt-4'>
      <FaUserTie className='participant-icon' />
      <div>
        <p className='participant-name'>{participant.name}</p>
        <p className='participant-email'>{participant.email}</p>
      </div>
      <div className='position-absolute end-0'>
        <button className='btn btn-danger me-5' onClick={() => setShowDeleteModal(true)}>Remove</button>
      </div>
      {showDeleteModal && <DeleteParticipantModal participant={participant} setShowDeleteModal={setShowDeleteModal} />}
    </div>
  )
}
