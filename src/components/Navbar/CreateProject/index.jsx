import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useState } from 'react'
import { getCurrentDate } from '../../../utils/currentDate'

export const CreateProjectModal = ({ setCreateProject }) => {
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    startDate: getCurrentDate(),
    endDate: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProjectData({ ...projectData, [name]: value })
  }

  return (
    <div className='container-create-project'>
      <div className='create-project'>
        <div className='close-modal'>
          <IoMdClose className='pointer' onClick={() => setCreateProject(false)} />
        </div>
        <h3>Create project</h3>
        <div className='form-group'>
          <h6>Name:</h6>
          <input type='text' name='name' value={projectData.name} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <h6>Description:</h6>
          <input type='text' name='description' value={projectData.description} onChange={handleChange} />
        </div>
        <div className='form-group'>
          <h6>End date:</h6>
          <input
            type='date'
            name='endDate'
            value={projectData.endDate || ''}
            onChange={handleChange}
          />
        </div>
        <div className='container-create-button'>
          <button onClick={() => console.log(projectData)}>Create project</button>
        </div>
      </div>
    </div>
  )
}
