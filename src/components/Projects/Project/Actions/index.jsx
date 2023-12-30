import axios from 'axios'
import { useContext, useState } from 'react'
import { ProjectContext } from '../../../../context/project'
import { DeleteProjectModal } from './DeleteProjectModal'

export const Actions = ({ project, setProject }) => {
  const [editedTitle, setEditedTitle] = useState(project.name)
  const [editedDescription, setEditedDescription] = useState(project.description)
  const { projects, setProjects } = useContext(ProjectContext)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const editProject = async () => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}project/${project._id}`, { name: editedTitle, description: editedDescription })
      if (response.status === 200) {
        project.name = editedTitle
        project.description = editedDescription
        setProject(response.data.project)
        setEditedTitle(project.name)
        setEditedDescription(project.description)
        const projectIndex = projects.findIndex((projectsCurrent) => projectsCurrent._id === project._id)
        const updatedProjects = [...projects]
        updatedProjects[projectIndex].name = editedTitle
        updatedProjects[projectIndex].description = editedDescription
        setProjects(updatedProjects)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='d-block d-md-flex mt-3'>
      <div style={{ width: '80%' }}>
        <h1>Actions</h1>
        <input
          type='text'
          className='form-edit title mb-2 mt-4'
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          type='text'
          className='form-edit description mb-2 mt-4'
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <div>
          <button
            className='btn btn-dark'
            disabled={project.name === editedTitle && project.description === editedDescription}
            onClick={editProject}
          >
            Save
          </button>
        </div>
      </div>
      <div className='mt-3'>
        <button className='btn btn-danger w-100' onClick={() => setShowDeleteModal(true)}>Delete Project</button>
      </div>
      {showDeleteModal && <DeleteProjectModal setShowDeleteModal={setShowDeleteModal} project={project} />}
    </div>
  )
}
