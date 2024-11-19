import React, { useEffect } from 'react'
import '../Single_Branch/Single_Branch.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Single_Branch = ({item}) => {
  const {img,title} = item || {}

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      infinite: true, 
    });
  }, []);
  return (
    <div className='single-branch mx-auto'>
      <div  data-aos="zoom-in-up" className='mr-0 md:mr-[rem]'>
        <div className="single-brach-info flex flex-col gap-2 items-center justify-between mb-8 w-[177px] h-[300px] bg-white border-2 border-[#FF0000] mx-auto rounded-[25px]">
          <div className="branch-img">
            <img src={img} alt="img" className='w-[175px] h-[175px]'/>
          </div>
          <div className="branch-title">
            <h1 className='my-[10px] text-[20px] text-center font-bold font-[oblique]'>{title}</h1>
          </div>
          
          <Link className='branch-btn' to={`/branches/${item.id}`}>
          <button className='my-[10px]'>
            <div className="bg-[#FF0000] text-white py-2 px-4 rounded-[48px] font-bold text-center">
              See More
            </div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Single_Branch
