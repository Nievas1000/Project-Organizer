import { IoMdClose } from 'react-icons/io'
import './index.css'
import { useProject } from '../../../hooks/useProject'

export const CreateProjectModal = ({ setCreateProject }) => {
  const { handleChange, projectData, createProject } = useProject()

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
          <button onClick={createProject}>Create project</button>
        </div>
      </div>
    </div>
  )
}
