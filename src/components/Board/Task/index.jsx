import { Link } from 'react-router-dom'

export const Task = ({ task }) => {
  const onDragStartHandle = (event) => {
    const currentElement = event.target
    event.dataTransfer.setData('application/json', JSON.stringify({ id: task._id, state: task.state }))

    setTimeout(() => {
      currentElement.classList.add('hiden')
    }, 0)
  }

  const onDragEndHandle = (event) => {
    const currentElement = event.target
    currentElement.classList.remove('hiden')
  }

  return (
    <Link to={`task/${task._id}`} onDragStart={onDragStartHandle} onDragEnd={onDragEndHandle}>
      <div className='task-container pointer' draggable>
        <p>{task.name}</p>
        <div className='owner'>
          <p>{task.owner.name}</p>
        </div>
      </div>
    </Link>
  )
}
