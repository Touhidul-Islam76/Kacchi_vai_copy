import React from 'react'
import { Carousel } from 'antd';
import logo from '../../assets/slider1.jpeg'
import logo2 from '../../assets/slider2.jpeg'
import logo3 from '../../assets/slider3.jpeg'
import logo4 from '../../assets/slider4.jpeg'


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Slider = () => {
  console.log(logo,logo2,logo3)
  return (
    <Carousel autoplay autoplaySpeed={2000}>
    <div>
      <img className='w-full h-full' src={logo} alt="" />
    </div>
    <div>
     <img className='w-full h-full' src={logo2} alt="" />
    </div>
    <div>
      <img className='w-full h-full' src={logo3} alt="" />
    </div>
  </Carousel>
  )
}

export default Slider
