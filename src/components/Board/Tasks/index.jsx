import './index.css'
import { Task } from '../Task'
import { useBoard } from '../../../hooks/useBoard'

export const Tasks = ({ state }) => {
  const { onDragEnterHandler, onDragOverHandler, onDropHandler, onDragLeaveHandler, tasks } = useBoard(state)

  return (
    <div className='tasks-section text-center mx-3' onDragLeave={onDragLeaveHandler} onDrop={onDropHandler} onDragEnter={onDragEnterHandler} onDragOver={onDragOverHandler}>
      <h3>{state}</h3>
      <div className='mt-4'>
        {tasks?.map((task) => {
          return (
            task.state === state && <Task key={task._id} task={task} />
          )
        })}
      </div>
    </div>
  )
}
