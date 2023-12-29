import { useContext } from 'react'
import { ProjectContext } from '../../../context/project'
import { formattedDate } from '../../../utils/formattedDate'
import { Link } from 'react-router-dom'

const tableStyle = {
  '--bs-table-bg': 'transparent'
}

export const ProjectsTable = () => {
  const { projects } = useContext(ProjectContext)
  return (
    <div className='container pt-5'>
      <h1>Projects</h1>
      <table className='table table-dark projects-table mt-5' style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project._id} className='pointer'>
              <td>
                <Link to={project._id}>
                  {project.name}
                </Link>
              </td>
              <td>{project.description}</td>
              <td>{formattedDate(project.endDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
