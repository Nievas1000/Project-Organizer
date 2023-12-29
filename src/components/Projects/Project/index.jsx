import { useEffect, useState } from 'react'
import './index.css'
import { NavbarProject } from '../NavbBarProject/NavbarProject'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { Summary } from './Summary'
import { People } from './People'
import { Actions } from './Actions'

export const Project = ({ id }) => {
  const [project, setProject] = useState()
  const [leader, setLeader] = useState()
  const [tasks, setTasks] = useState()
  const [selectedTab, setSelectedTab] = useState('summary')
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/project/${id}`).then(response => response.json()).then(data => {
        setProject(data.project)
        setLeader(data.leader)
        setTasks(data.tasks)
      })
    }
  }, [id])

  return (
    <div className='container mt-5 mb-3'>
      <FaArrowLeft className='pointer' size={25} onClick={() => navigate(-1)} />
      <h1 className='mt-3'>{project?.name}</h1>
      <NavbarProject selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 'summary' && <Summary leader={leader} tasks={tasks} project={project} />}
      {selectedTab === 'people' && <People project={project} />}
      {selectedTab === 'actions' && <Actions project={project} setProject={setProject} />}

    </div>
  )
}
