import { useContext, useState } from 'react'
import { ProjectContext } from '../../../context/project'

export const IssueInfo = ({ task }) => {
  const [comment, setComment] = useState('')
  const { selectedProject } = useContext(ProjectContext)
  return (
    <div className='ms-3'>
      <h5 className='mt-4'>Projects / {selectedProject ? selectedProject.name : null}</h5>
      <h3 className='text-white'>{task?.name}</h3>
      <h5 className='text-white mt-5'>Description</h5>
      <p>{task?.description}</p>
      <h5 className='text-white mt-5'>Activity</h5>
      <p>Show: Comments</p>
      <div className='comment-box'>
        <input
          type='text'
          className='form-control mb-2'
          placeholder='Leave a comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className='d-flex justify-content-end mt-2'>
          <button className='btn btn-dark'>Send</button>
        </div>
      </div>
    </div>
  )
}
