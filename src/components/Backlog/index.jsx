import { HiPlus } from 'react-icons/hi'
import './index.css'
import { useContext, useState } from 'react'
import { CreateIssueModal } from './CreateIssue'
import { ProjectContext } from '../../context/project'

export const Home = () => {
  const [showCreateIssue, setCreateIssue] = useState(false)
  const { tasks, selectedProject } = useContext(ProjectContext)

  return (
    <div className='container-fluid pt-5'>
      <div>
        <h5>Projects / {selectedProject}</h5>
        <h3>Backlog</h3>
      </div>
      <div className='task-list-container'>
        <ul className='task-list'>
          {tasks.map((task) => (
            <li key={task.id} className='task pointer'>
              <div className='task-title'>{task.title}</div>
              <div className={`task-status ${task.status.toLowerCase()}`}>
                {task.status}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='ms-3 pointer'>
        <span onClick={() => setCreateIssue(true)}><HiPlus /> Create issue</span>
      </div>
      {showCreateIssue && <CreateIssueModal setCreateIssue={setCreateIssue} />}
    </div>
  )
}
