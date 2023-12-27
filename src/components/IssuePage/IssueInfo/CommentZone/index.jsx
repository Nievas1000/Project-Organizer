import { useEditInfo } from '../../../../hooks/useEditInfo'
import './index.css'
import { Comment } from './Comment'

export const CommentZone = ({ task, setTask }) => {
  const { comment, setComment, addComment } = useEditInfo()

  return (
    <div>
      <h5 className='text-white mt-5'>Activity / Comments</h5>
      {task?.comments?.map((comment, index) => {
        return (
          <Comment comment={comment} key={index} task={task} setTask={setTask} />
        )
      })}
      <div className='comment-box mt-4'>
        <input
          type='text'
          className='form-control mb-2'
          placeholder='Leave a comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className='d-flex justify-content-end mt-2'>
          <button className='btn btn-dark mb-3' onClick={() => addComment(task)} disabled={comment === ''}>Send</button>
        </div>
      </div>
    </div>
  )
}
