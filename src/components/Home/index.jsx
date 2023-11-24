import { Navigator } from '../Navigator'
import { Backlog } from '../Backlog'
import { Route, Routes } from 'react-router-dom'
import { Board } from '../Board'

export const Home = () => {
  return (
    <div className='container-fluid pt-5 d-flex row'>
      <Navigator />
      <Routes>
        <Route path='/' element={<Backlog />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </div>
  )
}
