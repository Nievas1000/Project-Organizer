import './index.css'
import { Link } from 'react-router-dom'

export const Issue = ({ task }) => {
  return (
    <div>
      <Link to={`task/${task._id}`}>
        <li key={task._id} className='task pointer'>
          <div className='task-title'>{task.name}</div>
          <div className='task-status'>
            {task.state}
          </div>
        </li>
      </Link>
    </div>
  )
}
