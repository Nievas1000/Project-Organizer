import { Navbar } from '../Navbar'
import './index.css'
import { useParams } from 'react-router-dom'
import { ProjectsTable } from './ProjectsTable'
import { Project } from './Project'

export const Projects = () => {
  const { id } = useParams()
  return (
    <div>
      <Navbar />
      {!id
        ? <ProjectsTable />
        : <Project id={id} />}
    </div>
  )
}
