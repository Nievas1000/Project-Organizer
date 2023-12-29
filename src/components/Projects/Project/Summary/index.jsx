import { Spinner } from 'react-bootstrap'
import { formattedDate } from '../../../../utils/formattedDate'
import { TasksInfo } from './TasksInfo'
export const Summary = ({ project, leader, tasks }) => {
  return (
    <div className='mt-3'>
      {project
        ? (
          <div className='project-details-container w-100'>
            <div>
              <div className='w-100 d-flex space-between position-relative'>
                <div className='position-absolute d-grid end-0 mt-2 me-3'>
                  <span>End Date: {formattedDate(project.endDate)}</span>
                  <span>Leader: {leader.name}</span>
                </div>
              </div>
              <p className='d-flex justify-content-center mt-5 w-100'>{project.description}</p>
            </div>
            {tasks && tasks.length > 0
              ? <TasksInfo tasks={tasks} />
              : <h2 className='d-flex justify-content-center mt-5'>This project doesn't have tasks yet.</h2>}
          </div>
          )
        : (
          <div className='h-100 d-flex justify-content-center mt-5'>
            <Spinner className='mt-5' style={{ width: '100px', height: '100px' }} />
          </div>
          )}
    </div>
  )
}
