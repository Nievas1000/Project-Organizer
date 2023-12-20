import { IoMdClose } from 'react-icons/io'
import './index.css'
import { usePeople } from '../../../hooks/usePeople'

export const AddUsersModal = ({ setShowModal }) => {
  const { people, addPeople } = usePeople(setShowModal)
  return (
    <div className='container-add-users'>
      <div className='add-users'>
        <div className='close-modal'>
          <IoMdClose className='pointer me-2' onClick={() => setShowModal(false)} />
        </div>
        <div>
          <h3 className='ms-2'>All People</h3>
          {people && people.length > 0
            ? (
              <div className='mt-4'>
                {people.map((participant, index) => (
                  <div className='participant-container' key={index}>
                    <div className='participant-info'>
                      <p className='participant-name'>{participant.name}</p>
                      <p className='participant-email'>{participant.email}</p>
                    </div>
                    <div className='participant-actions'>
                      <button className='btn btn-dark' onClick={() => addPeople(participant)}>Add</button>
                    </div>
                  </div>
                ))}
              </div>
              )
            : (
              <p className='mt-4'>No participants available.</p>
              )}
        </div>
      </div>
    </div>
  )
}
