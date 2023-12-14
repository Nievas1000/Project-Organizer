import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Backlog } from './components/Backlog'
import Board from './components/Board'
import IssuePage from './components/IssuePage'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { PrivateRoute } from './components/PrivateRoute'
import { PublicRoute } from './components/PublicRoute'

function App () {
  return (
    <div className='app' style={{ backgroundColor: '#181818' }}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='home' element={<Home />}>
            <Route path='' element={<Backlog />} />
            <Route path='board' element={<Board />} />
            <Route path='board/task/:id' element={<IssuePage />} />
            <Route path='task/:id' element={<IssuePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
