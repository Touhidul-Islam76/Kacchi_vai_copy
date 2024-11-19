import React, { useEffect } from 'react'
import '../Single/Single.css'
import { IoMdPerson } from "react-icons/io"
import { IoPeople } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Single = ({item}) => {
    const {img,title,per,per2,per3,price} = item || {};

        const mrp = price?.mrp;
    const mrp2 = price?.mrp2;
    const mrp3 = price?.mrp3;

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          infinite: true, 
        });
      }, []);

  return (
    <div className='single-menu mx-auto'>
      <div className="menu mx-auto mb-5 md:mb-0" data-aos="fade-up">
        <div className="menu-info flex flex-col items-center justify-between w-[214px] h-[420px]">
            <div className='bg-white pb-5 rounded-b-[25px]'>
            <div className="menu-img ">
                <img src={img} className='w-[212px] h-[212px] rounded-t-[25px]' alt="img" />
            </div >
            
            <div className=''>
            <div className="menu-title bg-white">
                <h3 className='my-[10px] text-[20px] text-center font-bold font-[oblique]'>{title}</h3>
            </div>
            <div className="menu-per flex gap-6 items-center justify-center bg-white mb-5">
                <div className='flex flex-col gap-2  justify-between'>
                    <div ><IoMdPerson className='w-[40px] h-[40px] text-[#FF4A4A]'/></div>
                    <div className='text-[16px] my-[5px] font-bold'>{price.mrp}</div>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <div  ><IoPeople className='w-[40px] h-[40px] text-[#FF4A4A]'/></div>
                    <div className='text-[16px] my-[5px] font-bold'>{price.mrp2}</div>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center '>
                    <div  ><IoIosPeople className='w-[40px] h-[40px] text-[#FF4A4A]'/></div>
                    <div className='text-[16px] my-[5px] font-bold'>{price.mrp3}</div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    
    
  )
}


export default Single
