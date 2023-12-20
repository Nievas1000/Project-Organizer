import { useContext, useState } from 'react'
import { ProjectContext } from '../../context/project'
import { FaUserTie } from 'react-icons/fa'
import './index.css'
import { AddUsersModal } from './AddUsersModal'

export const ProjectParticipants = () => {
  const [showModal, setShowModal] = useState()
  const { participants } = useContext(ProjectContext)

  return (
    <div className='col-md-9 pt-5 position-absolute end-0 d-flex'>
      <div>
        <h1>All People</h1>
        {participants && participants.length > 0
          ? (
            <div className='participant-list mt-5'>
              {participants.map((participant, index) => (
                <div className='participant-item mt-4' key={index}>
                  <FaUserTie className='participant-icon' />
                  <div>
                    <p className='participant-name'>{participant.name}</p>
                    <p className='participant-email'>{participant.email}</p>
                  </div>
                </div>
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
