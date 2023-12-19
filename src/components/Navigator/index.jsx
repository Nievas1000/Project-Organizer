import { HiOutlineViewBoards } from 'react-icons/hi'
import { TfiViewList } from 'react-icons/tfi'
import { GoPeople } from 'react-icons/go'
import { Link } from 'react-router-dom'
import './index.css'

export const Navigator = () => {
  return (
    <nav className='col-md-3 d-none d-md-block sidebar board-container pt-5'>
      <div className='position-sticky'>
        <ul className='nav flex-column'>
          <li className='nav-item' style={{ fontSize: '25px' }}>
            <Link className='nav-link text-white' to=''>
              <TfiViewList className='me-2' />
              Backlog
            </Link>
          </li>
          <li className='nav-item' style={{ fontSize: '25px' }}>
            <Link className='nav-link text-white' to='board'>
              <HiOutlineViewBoards className='me-2' />
              Board
            </Link>
          </li>
          <li className='nav-item' style={{ fontSize: '25px' }}>
            <Link className='nav-link text-white' to='people'>
              <GoPeople className='me-2' />
              People
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
