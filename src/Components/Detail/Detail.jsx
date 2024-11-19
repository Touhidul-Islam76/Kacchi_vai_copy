import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Components/Detail/Detail.css'
import { FaClock } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiFoodpanda } from "react-icons/si";
import { RiStarFill } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbMapRoute } from "react-icons/tb";
import { MdMenuBook } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';

const Detail = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      infinite: true, 
      mirror: false,
    });
  }, []);
  return (
    <div className='Detail'>
     <div>
      <div className="b-head">
        <div className="b-head-img flex items-center justify-center">
        <img data-aos="zoom-in" src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/63f0729263ea2212dc19bb79_logo-4-removebg-p-500.webp" alt="img" className='w-[240px] h-[240px] bg-white p-4 rounded-[50%]'/>
        </div>
      </div>
      <div data-aos="zoom-out-left" className='my-0 md:my-[5rem]'>
      <div className="b-info flex items-center justify-center gap-8 flex-wrap">
        <h1 className="text-[52px] my-[15px] font-bold font-italic">Location</h1>
        <div className="flex flex-col gap-6 items-start justify-center gap-2">
        <div className="b-info-time flex gap-2 items-center justify-center gap-2">
        <FaClock className='text-[50px]'/>
        <h3 className='font-bold'>11:30A.M. - 11:30P.M</h3>
        </div>
        <div className="b-info-button flex gap-2 items-center justify-center gap-2">
          <Link to='https://www.kacchibhai.com/branch'><button className='bg-[#FF0000] text-white py-2 px-4 rounded-[48px] font-bold text-center'>Call Us</button></Link>
          <Link to='https://www.foodpanda.com.bd/chain/cw0gk/kacchi-bhai'><button className='border-2 border-[#FF0000] text-[#FF007B] py-2 px-4 rounded-[48px] font-bold text-center flex items-center justify-center gap-2'>
            <SiFoodpanda/>
            <div>
              <h1>Foodpanda</h1>
            </div>
            </button></Link>
            <div className='flex items-center gap-2 text-[#FF9900]'>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarFill/>
              <RiStarHalfFill/>
            </div>
        </div>
        </div>
      </div>
      </div>

      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
      <div className="info-buttons py-8 my-[5rem] md:my-[0rem] flex flex-wrap gap-4 items-center justify-around">
        <div className='w-[200px] h-[120px] rounded-[25px] transition duration-500  hover:bg-[#FFEDED] flex flex-col items-center justify-center bg-[#E8FAFE]'>
          <Link className='' to="">
          <div className='flex items-center justify-center'>
            <FaMapLocationDot className='text-[50px] text-[#FF0000]'/>
          </div>
          <div>
            <h1 className='text-[24px] font-bold leading-500'>Address</h1>
          </div>
          </Link>
        </div>


        <div className='w-[200px] h-[120px] rounded-[25px] transition duration-500  hover:bg-[#FFEDED] flex flex-col items-center justify-center bg-[#E8FAFE]'>
          <Link className='' to="https://maps.app.goo.gl/hqDmS5opz43AyprC7">
          <div className='flex items-center justify-center'>
            <TbMapRoute className='text-[50px] text-[#FF0000]'/>
          </div>
          <div>
            <h1 className='text-[24px] font-bold leading-500'>Map</h1>
          </div>
          </Link>
        </div>


        <div className='w-[200px] h-[120px] rounded-[25px] transition duration-500  hover:bg-[#FFEDED] flex flex-col items-center justify-center bg-[#E8FAFE]'>
          <Link className='' to="/menu">
          <div className='flex items-center justify-center'>
            <MdMenuBook className='text-[50px] text-[#FF0000]'/>
          </div>
          <div>
            <h1 className='text-[24px] font-bold leading-500'>Menu</h1>
          </div>
          </Link>
        </div>


        <div className='w-[200px] h-[120px] rounded-[25px] transition duration-500 hover:bg-[#FFEDED] flex flex-col items-center justify-center bg-[#E8FAFE]'>
          <Link className='' to="/offers">
          <div className='flex items-center justify-center'>
            <BiSolidOffer className='text-[50px] text-[#FF0000]'/>
          </div>
          <div>
            <h1 className='text-[24px] font-bold leading-500'>Offer</h1>
          </div>
          </Link>
        </div>


        <div className='w-[200px] h-[120px] rounded-[25px] transition duration-500 hover:bg-[#FFEDED] flex flex-col items-center justify-center bg-[#E8FAFE]'>
          <Link className='' to="">
          <div className='flex items-center justify-center'>
            <BiSolidCalendarCheck className='text-[50px] text-[#FF0000]'/>
          </div>
          <div>
            <h1 className='text-[24px] font-bold leading-500'>Booking</h1>
          </div>
          </Link>
        </div>
      </div>
      </div>
     </div>

     <div className="photo-sec my-[5rem] px-4 md:px-0">
     <div className='my-[5rem]'>        
        <h1 data-aos="zoom-in" data-aos-offset="100" className='overflow-y-hidden text-center text-3xl text-black font-bold'>Photos</h1>        
     </div>
     <div className='flex flex-wrap items-center justify-center gap-4 overflow-hidden'>
      <div className='photo'>
        <img data-aos="fade-right" className='overflow-y-hidden w-[690px] h-[530px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6427105f3c3b4114dd0c8d78_PXL_20220603_172543204.MP.webp" alt="img"/>
      </div>
      <div className="flex overflow-y-hidden items-center gap-4">
      <div data-aos="fade-up" className="flex flex-col overflow-y-hidden justify-center gap-4">
        <div className="photo1">
          <img className='w-[336px] h-[255px]' src='https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6427105f00defce6b0b680c4_2022-06-10.webp' alt='img'/>
        </div>
        <div className="photo2">
          <img className='w-[336px] h-[255px]' src='https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6427105f7740d253c1136d3d_2022-04-11.webp' alt='img'/>
        </div>
      </div>

      <div data-aos="fade-down" data-aos-offset="100" className="flex flex-col  justify-center gap-4">
        <div className="photo2">
          <img className='w-[336px] h-[255px]' src='https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/642710604b3ad02e0d3d759d_2023-01-04.webp' alt='img'/>
        </div>
        <div className="photo3">
          <img className='w-[336px] h-[255px]' src='https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/642710613d2216e4a01a4aa1_2023-02-06.webp' alt='img'/>
        </div>
      </div>
      </div>
     </div>
     </div>


     <div className="address-sec my-[5rem] px-4 md:px-0">
     <div className='my-[5rem]'>        
        <h1 data-aos="zoom-in" data-aos-offset="100" className='overflow-y-hidden text-center text-3xl text-black font-bold'>Address</h1>        
     </div>
      <div data-aos="fade-left" className="address-info flex flex-wrap gap-[50px] items-center justify-center">
        <div>
        <IoLocationSharp className='text-[100px] text-[#FF0000]'/>
        </div>
        <div>
          <h1 className='overflow-y-hidden text-center text-[24px] font-bold leading-500 text-4xl'> 25 DIT PLOT,Monir tower,<br />Balurmath,Chashara Narayanganj-1400</h1>
        </div>
      </div>
     </div>
     
    </div>

  )
}

export default Detail
