import { HiPlus } from 'react-icons/hi'
import './index.css'
import { useContext, useState } from 'react'
import { CreateIssueModal } from './CreateIssue'
import { ProjectContext } from '../../context/project'
import { NoProject } from './NoProject'
import { Issue } from './Issue'
import { daysUntilDate } from '../../utils/daysUntilDate'

export const Backlog = () => {
  const [showCreateIssue, setCreateIssue] = useState(false)
  const { tasks, selectedProject, projects } = useContext(ProjectContext)

  return (
    <div className='col-md-9 pt-5'>
      {projects && projects.length > 0
        ? <div>
          <div className='d-flex'>
            <div className='w-50'>
              <h5>Projects / {selectedProject ? selectedProject.name : null}</h5>
              <h3>Backlog</h3>
            </div>
            <h6 className='position-absolute end-0 me-5 mt-2'>{daysUntilDate(selectedProject?.endDate)} days remaining</h6>
          </div>
          <div className='task-list-container'>
            <ul className='task-list'>
              {tasks.map((task) => (
                <Issue key={task.name} task={task} />
              ))}
            </ul>
          </div>
          <div className='ms-3 pointer'>
            <span onClick={() => setCreateIssue(true)}><HiPlus /> Create issue</span>
          </div>
          {showCreateIssue && <CreateIssueModal setCreateIssue={setCreateIssue} />}
        </div> //eslint-disable-line
        : <NoProject />}
    </div>
  )
}
