import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Navigator } from '../Navigator'

export const Home = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='container-fluid d-flex row h-100'>
        <Navigator />
        <Outlet />
      </div>
    </div>
  )
}
