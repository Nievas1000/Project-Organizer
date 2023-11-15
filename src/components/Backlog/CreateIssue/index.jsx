import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useContext, useState } from 'react'
import axios from 'axios'
import { ProjectContext } from '../../../context/project'

export const CreateIssueModal = ({ setCreateIssue }) => {
  const { selectedProject, setTasks, tasks } = useContext(ProjectContext)
  const [issue, setIssue] = useState({
    name: '',
    description: '',
    state: 'TO DO',
    projectId: selectedProject ? selectedProject._id : null,
    owner: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setIssue({ ...issue, [name]: value })
  }

  const createIssue = async () => {
    try {
      const response = await axios.post('http://localhost:3001/task', issue)
      if (response.status === 200) {
        setCreateIssue(false)
        setTasks([...tasks, issue])
      }
    } catch (error) {
      console.log(error)
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
        </div>
        <div className='form-group'>
          <h6>Description:</h6>
          <input type='text' name='description' value={issue.description} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <h6>Owner:</h6>
          <select name='owner' value={issue.owner} onChange={handleChange}>
            <option value=''>Select owner</option>
            <option value='Lautaro'>Lautaro</option>
            <option value='Jerry'>Jerry</option>
            <option value='Sophia'>Sophia</option>
          </select>
        </div>
        <div className='container-create-button'>
          <button onClick={createIssue}>Create</button>
        </div>
      </div>
    </div>
  )
}
