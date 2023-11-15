import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useIssue } from '../../../../hooks/useIssue'

export const IssueInfo = ({ task, setShowModal }) => {
  const { editedTask, handleInputChange, handleSaveChanges } = useIssue(task, setShowModal)

  return (
    <div className='container-issue-info'>
      <div className='issue-info'>
        <div className='close-modal'>
          <IoMdClose className='pointer' onClick={() => setShowModal(false)} />
        </div>
        <h5>Owner</h5>
        <input
          type='text'
          name='owner'
          value={editedTask.owner}
          onChange={handleInputChange}
        />
        <h5>Summary</h5>
        <input
          type='text'
          name='name'
          value={editedTask.name}
          onChange={handleInputChange}
        />
        <h5>Description</h5>
        <textarea
          name='description'
          value={editedTask.description}
          onChange={handleInputChange}
        />
        <h5>Status</h5>
        <select
          name='state'
          value={editedTask.state}
          onChange={handleInputChange}
        >
          <option value='TO DO'>TO DO</option>
          <option value='IN PROGRESS'>IN PROGRESS</option>
          <option value='COMPLETED'>COMPLETED</option>
        </select>
        <div className='container-buttons'>
          <button className='save' onClick={handleSaveChanges}>Save</button>
          <button className='cancel' onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
