import { Navbar } from '../Navbar'
import './index.css'
import { useParams } from 'react-router-dom'
import { ProjectsTable } from './ProjectsTable'
import { Project } from './Project'
import { useContext } from 'react'
import { ProjectContext } from '../../context/project'

export const Projects = () => {
  const { id } = useParams()
  const { projects } = useContext(ProjectContext)
  return (
    <div>
      <Navbar />
      {projects.length > 0
        ? <div>
          {!id
            ? <ProjectsTable />
            : <Project id={id} />}
        </div>//eslint-disable-line
        : <h2 className='d-flex justify-content-center mt-5'>You don't have proyects yet...</h2>}
    </div>
  )
}
