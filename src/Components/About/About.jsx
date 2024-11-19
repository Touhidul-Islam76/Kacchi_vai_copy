import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../About/About.css'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";


const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      infinite: true, 
      mirror: false,
    });
  }, []);
  return (
    <div>
      <div className=' px-4 md:px-0 flex flex-wrap items-center justify-evenly gap-[5%] overflow-y-hidden mb-[100px] md:mb-[70px]'>
        <div className="about-img my-[5rem] px-4">
          <div className='flex  gap-4 mb-5 overflow-x-hidden'>
            <div data-aos="fade-right" className='flex  items-end overflow-y-hidden'>
            <img className='w-[326px] h-[200px] rounded-[25px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/642482485561fff2a7797289_2022-06-20%201.webp" alt="" />
            </div>
            <img data-aos="fade-down" className='w-[212px] h-[307px] rounded-[25px] overflow-y-hidden' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6424815e5a8ffe2f72990e5c_335607787_895138868208911_6758497625909498535_n-p-500.webp" alt="" />
          </div>

          <div className='flex  gap-4 overflow-y-hidden'>
            <div data-aos="fade-up-right" className='overflow-y-hidden'>
              <img className='w-[212px] h-[200px] rounded-[25px] overflow-y-hidden' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/64248249c0ca951513fdd1c1_20200725-DSC02756%201.webp" alt="" />
            </div>
            <img data-aos="fade-up" className='w-[212px] h-[307px]] rounded-[25px] overflow-y-hidden' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/64248249326f1c6c6bcd5f8c_20200725-DSC02574%201.webp" alt="" />
            <div data-aos="fade-up-left" className='overflow-y-hidden'>
              <img  className='w-[212px] h-[200px] rounded-[25px] overflow-y-hidden' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6424815d71210f3220d6af7b_336878319_233062179170619_8329475178666112431_n-p-500.webp" alt="" />
            </div>
          </div>
        </div>
        <div  data-aos="zoom-in-up">
          <h1 className=' about-img-title text-5xl  text-start overflow-y-hidden '>
          Traditional Kacchi means
          <br />
          Kacchi Bhai's Kacchi
          </h1>
        </div>
      </div>

      <div className="story bg-[#F2F5F9] py-[60px] md:py-[75px] flex flex-wrap items-center justify-center gap-[5%] px-8 md:px-0">
        <div data-aos="fade-right">
          <img className='w-[450px] h-[380px] rounded-[25px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6421bc39fad3f77efaab5e5f_Founder%20with%20Team-p-800.webp" alt="" />
        </div>
        <div data-aos="fade-left" className='w-[500px] h-[430px] md:h-[350px]'>
          <h1 className='text-[30px] font-extrabold text-[#FF0000]'>Our Story</h1>
          <br />
          <p>
          The journey of "Kacchi Bhai" began from the founder's desire to do something on his own. The first branch of Kacchi Bhai was opened at the Bashundhara Gate. However, there wasn't adequate electricity at the location, which led to the opening of the first branch without air conditioning. People came to eat the kacchi, enduring the sweltering heat and sweating profusely. They complained and criticized, yet the very next day, those same people returned to enjoy the kacchi again. And that's how the story began.
          </p>
        </div>
      </div>

      <div className="ceo my-[5rem] py-[60px] md:py px-8 md:px-0 flex flex-wrap items-center justify-center gap-[5%]">
        <div data-aos="fade-right" className='ceo-img'>
          <img className='w-[325px] h-[341px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6421abb75e30fe1d001e794d_Group%2029.webp" alt="" />
        </div>
        <div data-aos="fade-left" className="ceo-content w-[500px] h-[600px] md:h-[400px]">
          <p className='ceo-para'>
          "Since childhood, I’ve always loved the idea of independence. I wanted to stay independent, bring my thoughts to life, and do something on my own. With that mindset, I launched the first branch of 'Kacchivai' at Bashundhara Gate. I wanted the name of the brand to include the word 'Kacchi,' so I added 'vai' to it – combining 'Kacchi' with the term 'vai' from Jessore – and that’s how 'Kacchivai' came to be. Now, 'Kacchivai' is like a family of around 400 people. Being able to create jobs for 400 individuals gives me a sense of inner peace."
          </p>
          <br />
          <br />
          <div>
            <h1  className='text-[30px] font-extrabold text-[#FF0000]'>
                Sohel Shiraj
            </h1>
            <p className=''>Founder,Kacchivai</p>
            <div className='flex items-center justify-start gap-2'>
              <TiSocialFacebookCircular className='text-[36px]'/>
              <BsInstagram className='text-[27px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
