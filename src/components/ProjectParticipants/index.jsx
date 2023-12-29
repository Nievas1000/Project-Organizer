import { useContext, useState } from 'react'
import { ProjectContext } from '../../context/project'
import './index.css'
import { AddUsersModal } from './AddUsersModal'
import { Participant } from './Participant'
import { useAuth } from '../../hooks/useAuth'

export const ProjectParticipants = () => {
  const [showModal, setShowModal] = useState()
  const { participants, selectedProject } = useContext(ProjectContext)
  const { user } = useAuth()

  return (
    <div className='col-md-9 pt-5 d-flex'>
      <div className='w-100'>
        <h1>All People</h1>
        {participants && participants.length > 0
          ? (
            <div className='participant-list mt-5'>
              {participants
                .filter(participant => user.id !== participant._id)
                .map((participant, index) => (
                  <Participant key={index} participant={participant} isAdmin={selectedProject.admins.includes(user.email)} selectedProject={selectedProject} />
                ))}
            </div>
            )
          : (
            <p>No participants available.</p>
            )}
      </div>
      {selectedProject?.admins.includes(user.email) &&
        <div className='position-absolute end-0 me-5'>
          <button className='btn btn-dark' onClick={() => setShowModal(true)}>Add People</button>
        </div>}
      {showModal && <AddUsersModal setShowModal={setShowModal} />}
    </div>
  )
}
