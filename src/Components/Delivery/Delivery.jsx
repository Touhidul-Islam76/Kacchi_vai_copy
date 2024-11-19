import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Delivery = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          infinite: true, 
          mirror: false,
        });
      }, []);
  return (
    <div>
      <div className='my-[5rem] px-4 md:px-0 flex flex-wrap items-center justify-center gap-[5%]'>
      <div className='my-[5rem]'>        
        <h1  data-aos="fade-right" data-aos-offset="100" className='overflow-y-hidden h-auto  md:h-[65px] text-center text-5xl text-black family-[serif] font-bold'>Our Delivery Partners</h1>        
     </div>
     <div data-aos="fade-left" data-aos-offset="100">
        <div>
            <img className='w-[650px] h-[250px]' src='https://miro.medium.com/v2/resize:fit:640/0*VIJ7avn_ZpSu2lcv.png' alt='img'/>
        </div>
        <div className='flex items-center justify-center border-b-2 border-r-2 border-l-2'>
            <div>
                <img className='w-[320px] h-[220px]  border-r-2 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSSZPn6aCBce2EYwCjB9WDnndove8ufmkzg&s" alt="" />
            </div>
            <div>
                <img className='w-[320px] h-[220px]' src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2024/07/02/foodi.png" alt="" />
            </div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default Delivery
