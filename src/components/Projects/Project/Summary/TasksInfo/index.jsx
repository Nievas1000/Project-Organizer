import { Issue } from '../../../../Backlog/Issue'
import { GraphicTasks } from '../GraphicTasks/GraphicTasks'

export const TasksInfo = ({ tasks }) => {
  return (
    <div className='container-fluid d-block d-md-flex pt-5'>
      <div className='w-50 '>
        <h2>Issues</h2>
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
      <div className='w-50 ps-5'>
        <GraphicTasks tasks={tasks} />
      </div>
    </div>
  )
}
