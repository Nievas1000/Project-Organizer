import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import './index.css'
import { IssueInfo } from './IssueInfo'

const IssuePage = () => {
  const [task, setTask] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/taskInfo/${id}`).then(response => response.json()).then(data => {
        setTask(data)
      })
    }
  }, [id])
  return (
    <div className='col-md-9 ms-2 pt-5 d-flex row'>
      <div className='col-md-9'>
        <FaArrowLeft className='pointer' size={25} onClick={() => navigate(-1)} />
        <IssueInfo task={task} />
      </div>
      <div className='col-md-3'>
        <h3>TO DO</h3>
        <h5 className='text-white'>Assigne</h5>
        <p>{task?.owner}</p>
      </div>
    </div>
  )
}

export default IssuePage
