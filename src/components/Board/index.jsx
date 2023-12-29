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
    <div className='col-md-9 ms-5 d-flex justify-content-end pt-5'>
      <Tasks state='TO DO' />
      <Tasks state='IN PROGRESS' />
      <Tasks state='DONE' />
    </div>
  )
}

export default Board
