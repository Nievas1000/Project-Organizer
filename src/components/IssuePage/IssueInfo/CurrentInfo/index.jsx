import { useState } from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { DeleteIssueModal } from './DeleteIssueModal'

export const CurrentInfo = ({ task, handleEditClick }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  return (
    <div>
      <h1 className='text-white mt-4'>{task?.name}</h1>
      <div className='d-flex'>
        <div className='d-inline-flex pointer action-button edit-action' onClick={() => handleEditClick(task)}>
          <MdModeEdit className='mt-1' size={12} />
          <span className='ms-1'>Edit</span>
        </div>
        <div className='d-inline-flex pointer action-button delete-action ms-3' onClick={() => setShowDeleteModal(true)}>
          <MdDelete className='mt-1' size={12} />
          <span className='ms-1'>Delete</span>
        </div>
      </div>
      <h5 className='text-white mt-5'>Description</h5>
      <p>{task?.description}</p>
      {showDeleteModal && <DeleteIssueModal setShowDeleteModal={setShowDeleteModal} task={task} />}
    </div>
  )
}
