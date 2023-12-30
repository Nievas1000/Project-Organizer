import { Issue } from '../../../../Backlog/Issue'
import { GraphicTasks } from '../GraphicTasks/GraphicTasks'
import './index.css'

export const TasksInfo = ({ tasks }) => {
  return (
    <div className='container-fluid d-block d-md-flex pt-5'>
      <div className='issue-container'>
        <h2 className='d-flex justify-content-center'>Issues</h2>
        <div className='container-tasks mt-5'>
          <div>
            {tasks.map((task) => {
              return (
                <Issue key={task._id} task={task} />
              )
            })}
          </div>
        </div>
      </div>
      <div className='graphic-container'>
        <GraphicTasks tasks={tasks} />
      </div>
    </div>
  )
}
