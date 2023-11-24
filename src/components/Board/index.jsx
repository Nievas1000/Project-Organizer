import { Tasks } from './Tasks'
import './index.css'

export const Board = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='tasks-section text-center mx-3'>
        <h3>TO DO</h3>
        <Tasks state='TO DO' />
      </div>
      <div className='tasks-section text-center mx-3'>
        <h3>IN PROGRESS</h3>
        <Tasks state='IN PROGRESS' />
      </div>
      <div className='tasks-section text-center mx-3'>
        <h3>COMPLETED</h3>
        <Tasks state='COMPLETED' />
      </div>
    </div>
  )
}
