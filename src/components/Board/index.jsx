import React from 'react'
import { Tasks } from './Tasks'
import CarouselTaskMobile from './CarouselTaskMobile'
import { useMediaQuery } from 'react-responsive'
import './index.css'

const Board = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  if (isMobile) {
    return (
      <CarouselTaskMobile />
    )
  }

  return (
    <div className='col-md-9 d-flex justify-content-center pt-5'>
      <div className='tasks-section text-center mx-3'>
        <h3>TO DO</h3>
        <Tasks state='TO DO' />
      </div>
      <div className='tasks-section text-center mx-3'>
        <h3>IN PROGRESS</h3>
        <Tasks state='IN PROGRESS' />
      </div>
      <div className='tasks-section text-center mx-3'>
        <h3>DONE</h3>
        <Tasks state='DONE' />
      </div>
    </div>
  )
}

export default Board
