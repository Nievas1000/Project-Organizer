import { useContext, useState } from 'react'
import { ProjectContext } from '../../context/project'
import './index.css'
import { AddUsersModal } from './AddUsersModal'
import { Participant } from './Participant'
import { useAuth } from '../../hooks/useAuth'

export const ProjectParticipants = () => {
  const [showModal, setShowModal] = useState()
  const { participants } = useContext(ProjectContext)
  const { user } = useAuth()

  return (
    <div className='col-md-9 pt-5 position-absolute end-0 d-flex'>
      <div>
        <h1>All People</h1>
        {participants && participants.length > 0
          ? (
            <div className='participant-list mt-5'>
              {participants
                .filter(participant => user.id !== participant._id)
                .map((participant, index) => (
                  <Participant key={index} participant={participant} />
                ))}
            </div>
            )
          : (
            <p>No participants available.</p>
            )}
      </div>
      <div className='position-absolute end-0 top-0 mt-5 me-5'>
        <button className='btn btn-dark' onClick={() => setShowModal(true)}>Add People</button>
      </div>
      {showModal && <AddUsersModal setShowModal={setShowModal} />}
    </div>
  )
}
