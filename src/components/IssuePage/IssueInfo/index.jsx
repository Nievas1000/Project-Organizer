import { MdModeEdit } from 'react-icons/md'
import { EditInfo } from './EditInfo'
import { useEditInfo } from '../../../hooks/useEditInfo'
import './index.css'

export const IssueInfo = ({ task }) => {
  const { selectedProject, isEditMode, handleEditClick, comment, setComment, editedDescription, editedTitle, handleCancelClick, setEditedDescription, setEditedTitle } = useEditInfo()
  return (
    <div className='ms-3'>
      <h5 className='mt-4'>Projects / {selectedProject ? selectedProject.name : null}</h5>
      <div>
        {isEditMode
          ? (
            <EditInfo
              task={task} editedDescription={editedDescription} editedTitle={editedTitle}
              handleCancelClick={handleCancelClick}
              setEditedDescription={setEditedDescription} setEditedTitle={setEditedTitle}
            />
            )
          : (
            <>
              <h1 className='text-white mt-4'>{task?.name}</h1>
              <div className='d-flex pointer' onClick={() => handleEditClick(task)}>
                <div className='d-inline-flex pointer set-edit'>
                  <MdModeEdit className='mt-1' size={20} />
                  <span className='ms-1'>Edit</span>
                </div>
              </div>
              <h5 className='text-white mt-5'>Description</h5>
              <p>{task?.description}</p>
            </>
            )}
      </div>
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
