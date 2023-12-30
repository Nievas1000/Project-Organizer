/* eslint-disable react/jsx-indent */
import { formatDistanceToNow } from 'date-fns'
import { useAuth } from '../../../../../hooks/useAuth'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaCheck, FaTrash } from 'react-icons/fa6'
import axios from 'axios'

export const Comment = ({ comment, task, setTask }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [isDeleteMode, setIsDeleteMode] = useState(false)
  const [editComment, setEditComment] = useState()
  const { user } = useAuth()

  const handleEditComment = () => {
    setEditComment(comment.comment)
    setIsEditMode(true)
  }

  const saveEditComment = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}editComment/${task._id}/${comment.id}`, { editedComment: editComment })
      console.log(response)
      if (response.status === 200) {
        comment.comment = editComment
        setIsEditMode(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteComment = async () => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}deleteComment/${task._id}/${comment.id}`)
      console.log(response)
      if (response.status === 200) {
        setTask(response.data.task)
        setIsDeleteMode(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='comment-container'>
      <div className='comment-header'>
        <span className='comment-author'>{comment.name}</span>
        <span className='comment-timestamp'>{formatDistanceToNow(new Date(comment.date), { addSuffix: true })}</span>
      </div>
      {!isEditMode && !isDeleteMode
        ? <div>
            <p className='comment-content'>{comment.comment}</p>
            {user.email === comment.email &&
                <div className='d-flex modify-comment-zone mt-2'>
                    <span className='pointer' onClick={handleEditComment}>Edit</span>
                    <span className='ms-1'>.</span>
                    <span className='ms-1 pointer' onClick={() => setIsDeleteMode(true)}>Delete</span>
                </div>}
          </div>
        : isEditMode
          ? <div className='d-flex align-items-center mt-2'>
                <input type='text' className='form-edit-comment' value={editComment} onChange={(e) => setEditComment(e.target.value)} />
                <MdClose className='ms-2 pointer' title='Cancel' onClick={() => setIsEditMode(false)} />
                {editComment !== comment.comment && <FaCheck className='ms-2 pointer' onClick={saveEditComment} title='Edit' />}
            </div>
          : <div className='d-flex align-items-center mt-2'>
                <p className='comment-content'>{comment.comment}</p>
                <FaTrash className='ms-2 pointer' fill='#8b0000' title='Delete' onClick={deleteComment} />
                <MdClose className='ms-2 pointer' title='Cancel' onClick={() => setIsDeleteMode(false)} />
            </div>}
    </div>
  )
}
