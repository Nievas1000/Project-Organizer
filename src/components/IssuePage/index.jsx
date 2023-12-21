import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './index.css'
import { IssueInfo } from './IssueInfo'
import { ProjectContext } from '../../context/project'
import axios from 'axios'

const IssuePage = () => {
  const [task, setTask] = useState()
  const [owner, setOwner] = useState()
  const [state, setState] = useState()
  const { participants, tasks, setTasks } = useContext(ProjectContext)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/taskInfo/${id}`).then(response => response.json()).then(data => {
        setTask(data)
      })
    }
  }, [id])

  const updateOwner = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/updateOwner/${task._id}`, { email: owner })
      if (response.status === 200) {
        task.owner.email = owner
        task.owner.name = response.data.owner
        const taskIndex = tasks.findIndex((taskCurrent) => taskCurrent._id === task._id)
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex].owner.email = owner
        updatedTasks[taskIndex].owner.name = response.data.owner
        setTasks(updatedTasks)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateStatus = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/updateStatus/${task._id}`, { state })
      if (response.status === 200) {
        task.state = response.data.task.state
        const taskIndex = tasks.findIndex((taskCurrent) => taskCurrent._id === task._id)
        const updatedTasks = [...tasks]
        updatedTasks[taskIndex].state = response.data.task.state
        setTasks(updatedTasks)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='col-md-9 ms-2 pt-5 d-flex row'>
      <div className='col-md-9'>
        <FaArrowLeft className='pointer' size={25} onClick={() => navigate(-1)} />
        <IssueInfo task={task} />
      </div>
      <div className='col-md-3'>
        <select name='status' value={!state ? task?.state : state} className='status' onChange={(e) => setState(e.target.value)}>
          <option value='TO DO'>TO DO</option>
          <option value='IN PROGRESS'>IN PROGRESS</option>
          <option value='DONE'>DONE</option>
        </select>
        {task?.state !== state && state && <button className='btn btn-dark ms-2' onClick={updateStatus}>Save</button>}
        <h5 className='text-white mt-4'>Assigne</h5>
        <select name='owner' value={!owner ? task?.owner.email : owner} onChange={(e) => setOwner(e.target.value)}>
          {participants?.map((participant) => (
            <option key={participant._id} value={participant.email}>
              {participant.name}
            </option>
          ))}
        </select>
        {task?.owner.email !== owner && owner && <button className='btn btn-dark ms-2' onClick={updateOwner}>Save</button>}
      </div>
    </div>
  )
}

export default IssuePage
