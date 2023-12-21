import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../../context/project'
import './index.css'
import { IssueInfo } from '../../Backlog/Issue/IssueInfo'
import { Link } from 'react-router-dom'

export const Tasks = ({ state }) => {
  const [tasks, setTasks] = useState()
  const [task, setTask] = useState()
  const [showModal, setShowModal] = useState(false)
  const { selectedProject } = useContext(ProjectContext)

  const openModal = (task) => {
    setTask(task)
    setShowModal(true)
  }

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
          <Link key={task._id} to={`task/${task._id}`}>
            <div className='task-container pointer' onClick={() => openModal(task)}>
              <p>{task.name}</p>
              <div className='owner'>
                <p>{task.owner.name}</p>
              </div>
            </div>
          </Link>
        )
      })}
      {showModal && <IssueInfo task={task} setShowModal={setShowModal} />}
    </div>
  )
}
