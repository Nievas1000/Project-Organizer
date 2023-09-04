import { HiPlus } from 'react-icons/hi'
import './index.css'

const tasks = [
  { id: 1, title: 'Crear página de inicio', status: 'En progreso' },
  { id: 2, title: 'Implementar funcionalidad de usuario', status: 'Pendiente' },
  { id: 3, title: 'Pruebas de unidad', status: 'Completada' }
  // Agrega más tareas aquí
]

export const Home = () => {
  return (
    <div className='container-fluid pt-5'>
      <div>
        <h5>Projects / Project 1</h5>
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
        <span><HiPlus /> Create issue</span>
      </div>
    </div>
  )
}
