import React, { useEffect, useState } from 'react'
import '../Branch/Branch.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Single_Branch from '../Single_Branch/Single_Branch';

const Branch = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          infinite: true, 
        });
      }, []);


    const [branch, setBranch] = useState([])

    useEffect(() => {
        fetch('Branch.json')
        .then(res => res.json())
        .then(data => setBranch(data))
    }, [])
  return (
    <div className=''>
      <div className='my-[5rem]'>        
        <h1 data-aos="zoom-in" className='text-center text-3xl b-title font-bold'>Our Branches</h1>        
     </div>

     <div className="branch bg-[#E8FAFE]">
        <div className='py-12 w-[85%] rounded-bl-[120px] rounded-tr-[120px] mb-12 mx-auto'>
            <div className='flex flex-wrap gap-3 bg-[#E8FAFE]  mx-auto'>
                {branch.map((item, index) => <Single_Branch key={index} item={item}></Single_Branch>)}
            </div>
        </div>
     </div>
    </div>
  )
}

export default Branch
