import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useCreateIssue } from '../../../hooks/useCreateIssue'

export const CreateIssueModal = ({ setCreateIssue }) => {
  const { error, issue, handleChange, participants, apiError, createIssue } = useCreateIssue(setCreateIssue)
  return (
    <div className='container-create-task'>
      <div className='create-task'>
        <div className='close-modal'>
          <IoMdClose className='pointer' onClick={() => setCreateIssue(false)} />
        </div>
        <h3>Create issue</h3>
        <div className='form-group'>
          <h6>Name:</h6>
          <input type='text' name='name' value={issue.name} onChange={handleChange} />
          {error.exist && error.fields.name !== '' && <span className='error-message'>{error.fields.name}</span>}
        </div>
        <div className='form-group'>
          <h6>Description:</h6>
          <input type='text' name='description' value={issue.description} onChange={handleChange} />
          {error.exist && error.fields.description !== '' && <span className='error-message'>{error.fields.description}</span>}
        </div>
        <div className='form-group'>
          <h6>Owner:</h6>
          <select name='owner' value={issue.owner} onChange={handleChange}>
            <option value=''>Select owner</option>
            {participants.map((participant) => (
              <option key={participant._id} value={participant._id}>
                {participant.name}
              </option>
            ))}
          </select>
          {error.exist && error.fields.owner !== '' && <span className='error-message d-flex'>{error.fields.owner}</span>}
        </div>
        {apiError !== '' && <span className='error-message d-flex'>{apiError}</span>}
        <div className='container-create-button'>
          <button className='btn btn-dark' onClick={createIssue}>Create</button>
        </div>
      </div>
    </div>
  )
}
