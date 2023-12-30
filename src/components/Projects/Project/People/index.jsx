import { useContext, useEffect, useState } from 'react'
import { Participant } from '../../../ProjectParticipants/Participant'
import { useAuth } from '../../../../hooks/useAuth'
import { Spinner } from 'react-bootstrap'
import { AddUsersModal } from '../../../ProjectParticipants/AddUsersModal'
import { ProjectContext } from '../../../../context/project'

export const People = ({ project }) => {
  const [showModal, setShowModal] = useState()
  const [participantsPro, setParticipantsPro] = useState()
  const { participants } = useContext(ProjectContext)
  const { user } = useAuth()

  useEffect(() => {
    if (project) {
      fetch(`${import.meta.env.VITE_API_BASE_URL}usersByProject/${project._id}`).then(response => response.json()).then(data => {
        setParticipantsPro(data)
      })
    }
  }, [project, participants])
  return (
    <div className='mt-2 position-relative d-flex'>
      <div className='w-100'>
        <h1>People</h1>
        {participantsPro && participantsPro.length > 0
          ? (
            <div className='position-relative mt-5'>
              {participantsPro
                .map((participant, index) => (
                  <Participant key={index} participant={participant} isAdmin={project.admins.includes(user.email)} selectedProject={project} />
                ))}
            </div>
            )
          : (
            <div className='h-100 d-flex justify-content-center mt-5'>
              <Spinner className='mt-5' style={{ width: '100px', height: '100px' }} />
            </div>
            )}
      </div>
      {project?.admins.includes(user.email) &&
        <div className='position-absolute end-0 me-5 mt-2'>
          <button className='btn btn-dark' onClick={() => setShowModal(true)}>Add People</button>
        </div>}
      {showModal && <AddUsersModal setShowModal={setShowModal} />}
    </div>
  )
}
