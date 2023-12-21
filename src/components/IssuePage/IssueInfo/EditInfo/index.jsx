import { IoMdClose } from 'react-icons/io'
import './index.css'

export const EditInfo = ({ task, editedTitle, setEditedTitle, setEditedDescription, editedDescription, handleCancelClick }) => {
  return (
    <div className='d-block'>
      <input
        type='text'
        className='form-edit title mb-2 mt-4'
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <div className='d-flex align-items-center' onClick={() => handleCancelClick(task)}>
        <div className='d-inline-flex pointer set-edit'>
          <IoMdClose className='mt-1' size={20} />
          <span className='ms-1'>Cancel</span>
        </div>
      </div>
      <h5 className='text-white mt-5'>Description</h5>
      <textarea
        type='text'
        className='form-edit description mb-2'
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <div className='d-flex justify-content-end'>
        <button className='btn btn-dark'>Save</button>
      </div>
    </div>
  )
}
