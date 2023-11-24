import { Home } from './components/Home'
import { Navbar } from './components/Navbar'

function App () {
  return (
    <div className='app' style={{ backgroundColor: '#181818' }}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
