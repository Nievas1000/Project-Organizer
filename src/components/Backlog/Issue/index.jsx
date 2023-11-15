import { useState } from 'react'
import { IssueInfo } from './IssueInfo'
import './index.css'

export const Issue = ({ task }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <li key={task._id} className='task pointer' onClick={() => setShowModal(true)}>
        <div className='task-title'>{task.name}</div>
        <div className='task-status'>
          {task.state}
        </div>
      </li>
      {showModal && <IssueInfo task={task} setShowModal={setShowModal} />}
    </div>
  )
}
