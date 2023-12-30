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
    <div className='col-md-9 pt-5 d-block d-md-flex'>
      <div style={{ width: '80%' }}>
        <h2>{participants && participants.length > 1 ? 'All People' : 'Add participants to your project and you will see them here'}</h2>
        {participants && participants.length > 1 &&
          (
            <div className='participant-list mt-5'>
              {participants
                .filter(participant => user.id !== participant._id)
                .map((participant, index) => (
                  <Participant key={index} participant={participant} isAdmin={selectedProject.admins.includes(user.email)} selectedProject={selectedProject} />
                ))}
            </div>
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
