import { HiOutlineViewBoards } from 'react-icons/hi'
import { TfiViewList } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

export const Navigator = () => {
  return (
    <div className='col-md-2 d-none d-md-block'>
      <Link className='d-flex' to='/'>
        <TfiViewList style={{ fontSize: '25px' }} className='mt-2' />
        <h3 className='ms-4'>Backlog</h3>
      </Link>
      <Link className='d-flex mt-2' to='/board'>
        <HiOutlineViewBoards style={{ fontSize: '25px' }} className='mt-2' />
        <h3 className='ms-4'>Board</h3>
      </Link>
    </div>
  )
}
