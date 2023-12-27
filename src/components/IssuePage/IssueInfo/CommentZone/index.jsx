import { formatDistanceToNow } from 'date-fns'
import { useEditInfo } from '../../../../hooks/useEditInfo'
import './index.css'

export const CommentZone = ({ task }) => {
  const { comment, setComment, addComment } = useEditInfo()
  return (
    <div>
      <h5 className='text-white mt-5'>Activity / Comments</h5>
      {task?.comments?.map((comment, index) => {
        return (
          <div className='comment-container' key={index}>
            <div className='comment-header'>
              <span className='comment-author'>{comment.name}</span>
              <span className='comment-timestamp'>{formatDistanceToNow(new Date(comment.date), { addSuffix: true })}</span>
            </div>
            <p className='comment-content'>{comment.comment}</p>
          </div>
        )
      })}
      <div className='comment-box mt-5'>
        <input
          type='text'
          className='form-control mb-2'
          placeholder='Leave a comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className='d-flex justify-content-end mt-2'>
          <button className='btn btn-dark' onClick={() => addComment(task)} disabled={comment === ''}>Send</button>
        </div>
      </div>
    </div>
  )
}
