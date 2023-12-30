import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './index.css'
import { IssueInfo } from './IssueInfo'
import { useEditInfo } from '../../hooks/useEditInfo'

const IssuePage = () => {
  const { setTask, task, state, owner, setState, setOwner, participants, updateOwner, updateStatus } = useEditInfo()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_BASE_URL}taskInfo/${id}`).then(response => response.json()).then(data => {
        setTask(data)
      })
    }
  }, [id])

  return (
    <div className='col-md-9 ms-2 pt-5 d-flex row'>
      <div className='col-md-9'>
        <FaArrowLeft className='pointer' size={25} onClick={() => navigate(-1)} />
        <IssueInfo task={task} setTask={setTask} />
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
