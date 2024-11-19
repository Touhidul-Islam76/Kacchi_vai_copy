import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-center items-center mx-auto border-t-2 '>
      <div className="footer p-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div className="foot-1 mx-auto">
            <div className='w-[340px] h-[144px] my-[5rem]'>
                <img className='w-[98px] h-[98px] flex items-center justify-center' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/63f0729263ea2212dc19bb79_logo-4-removebg-p-500.webp" alt="" />
                <div className="icons">
                <div className='flex items-center justify-start mt-4 gap-3'>
                    <Link className='' to="https://www.facebook.com/KacchiBhaiOfficial"><FaSquareFacebook className='text-[30px]'/></Link>
                    <Link className='' to="https://www.instagram.com/kacchibhai/"><RiInstagramFill className='text-[30px]'/></Link>
                    <Link className='' to="https://www.linkedin.com/company/kacchibhai/"><FaLinkedin className='text-[30px]'/></Link>
                    <Link className='' to="https://www.tiktok.com/@kacchibhai"><AiFillTikTok className='text-[30px]'/></Link>
                </div>
            </div>
            </div>
            
        </div>
        <div className="product w-[180px] h-[250px] mx-0 md:mx-auto">
            <h1 className='text-[20px] font-bold'>Product</h1>
            <br />
            <p>- Menu</p>
            <br />
            <p>- Price List</p>
            <br />
            <p>- Reviews</p>
            <br />
            <p>- Updates</p>
        </div>
        <div className="product w-[180px] h-[250px] mx-0 md:mx-auto">
            <h1 className='text-[20px] font-bold'>Company</h1>
            <br />
            <p>- About Us</p>
            <br />
            <p>- Contact Ua</p>
            <br />
            <p>- Careers</p>
            
        </div>
        <div className="product w-[180px] h-[250px] mx-0 md:mx-auto">
            <h1 className='text-[20px] font-bold'>Support</h1>
            <br />
            <p>- Help Center</p>
            <br />
            <p>- Report a Bug</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
