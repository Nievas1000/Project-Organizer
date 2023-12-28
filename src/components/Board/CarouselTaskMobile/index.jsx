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
      <Tasks state='TO DO' />
      <Tasks state='IN PROGRESS' />
      <Tasks state='DONE' />
    </Slider>
  )
}

export default CarouselTaskMobile
