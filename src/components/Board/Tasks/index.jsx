import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../../context/project'
import './index.css'

export const Tasks = ({ state }) => {
  const [tasks, setTasks] = useState()
  const { selectedProject } = useContext(ProjectContext)
  useEffect(() => {
    if (selectedProject) {
      fetch(`http://localhost:3001/taskByStatus/${selectedProject._id}/${state}`).then(response => response.json()).then(data => {
        setTasks(data.tasks)
      })
    }
  }, [selectedProject, state])
  return (
    <div className='mt-4'>
      {tasks?.map((task) => {
        return (
          <div key={task._id} className='task-container'>
            <p>{task.name}</p>
            <div className='owner'>
              <p>{task.owner}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
