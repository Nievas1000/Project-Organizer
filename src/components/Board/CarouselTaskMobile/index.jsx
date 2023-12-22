import Slider from 'react-slick'
import { Tasks } from '../Tasks'
import '../index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselTaskMobile = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <Slider {...settings} className='pt-5'>
      <div>
        <div className='tasks-section text-center mx-3'>
          <h3>TO DO</h3>
          <Tasks state='TO DO' />
        </div>
      </div>
      <div>
        <div className='tasks-section text-center mx-3'>
          <h3>IN PROGRESS</h3>
          <Tasks state='IN PROGRESS' />
        </div>
      </div>
      <div>
        <div className='tasks-section text-center mx-3'>
          <h3>DONE</h3>
          <Tasks state='DONE' />
        </div>
      </div>
    </Slider>
  )
}

export default CarouselTaskMobile
