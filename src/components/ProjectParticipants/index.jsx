import { useContext } from 'react'
import { ProjectContext } from '../../context/project'
import { FaUserTie } from 'react-icons/fa'
import './index.css'

export const ProjectParticipants = () => {
  const { participants } = useContext(ProjectContext)

  return (
    <div className='col-md-9 pt-5 position-absolute end-0 d-flex'>
      <div>
        <h1>All People</h1>
        {participants && participants.length > 0
          ? (
            <div className='participant-list mt-4'>
              {participants.map((participant, index) => (
                <div className='participant-item' key={index}>
                  <FaUserTie className='participant-icon' />
                  <span className='participant-name'>{participant.name}</span>
                </div>
              ))}
            </div>
            )
          : (
            <p>No participants available.</p>
            )}
      </div>
      <div className='position-absolute end-0 top-0 mt-5 me-5'>
        <button className='btn btn-dark'>Add People</button>
      </div>
    </div>
  )
}
