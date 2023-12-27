import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import { ProjectContext } from '../../../context/project'

export const CreateIssueModal = ({ setCreateIssue }) => {
  const { selectedProject, setTasks, participants } = useContext(ProjectContext)
  const [issue, setIssue] = useState({
    name: '',
    description: '',
    state: 'TO DO',
    projectId: selectedProject ? selectedProject._id : null,
    owner: ''
  })
  const [error, setError] = useState({
    exist: false,
    fields: {
      name: '',
      description: '',
      owner: ''
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setIssue({ ...issue, [name]: value })
    updateErrorFields([name], '')
  }

  const updateErrorFields = (field, value) => {
    setError(prevError => ({
      ...prevError,
      fields: {
        ...prevError.fields,
        [field]: value
      }
    }))
  }

  const createIssue = async () => {
    if (issue.name !== '' && issue.description !== '' && issue.owner !== '') {
      try {
        const response = await axios.post('http://localhost:3001/task', issue)
        if (response.status === 200) {
          setCreateIssue(false)
          setTasks(response.data.tasks)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      error.exist = true
      if (issue.name === '') {
        updateErrorFields('name', 'You must enter a name!')
      }
      if (issue.description === '') {
        updateErrorFields('description', 'You must enter a description!')
      }
      if (!issue.endDate) {
        updateErrorFields('owner', 'You must enter an owner!')
      }
    }
  }

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
        <div className='container-create-button'>
          <button className='btn btn-dark' onClick={createIssue}>Create</button>
        </div>
      </div>
    </div>
  )
}
