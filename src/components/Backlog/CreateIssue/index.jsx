import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useState } from 'react'

export const CreateIssueModal = ({ setCreateIssue }) => {
  const [issue, setIssue] = useState({
    name: '',
    description: '',
    state: 'TO DO',
    projectId: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setIssue({ ...issue, [name]: value })
  }

  return (
    <div className='container-create-task'>
      <div className='create-task'>
        <div className='close-modal'>
          <IoMdClose className='pointer' onClick={() => setCreateIssue(false)} />
        </div>
        <h3>Create project</h3>
        <div className='form-group'>
          <h6>Name:</h6>
          <input type='text' name='name' value={issue.name} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <h6>Description:</h6>
          <input type='text' name='description' value={issue.description} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <h6>Owner:</h6>
          <select>
            <option>Select owner</option>
            <option>Lautaro</option>
            <option>Jerry</option>
            <option>Sophia</option>
          </select>
        </div>
        <div className='container-create-button'>
          <button onClick={() => console.log(issue)}>Create</button>
        </div>
      </div>
    </div>
  )
}
