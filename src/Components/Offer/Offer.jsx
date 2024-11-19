import React from 'react'
import '../Offer/Offer.css'
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Offer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      infinite: true, 
      mirror: false,
    });
  }, []);
  return (
    <div className='px-8 py-10 flex flex-wrap items-center justify-center gap-9'>
      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/67349521bab346e57fd3fdf0_466969985_864293049249336_4425944953291454281_n.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/66eadafc2fd192092d1c6e3f_460449453_823591003319541_9027587499292704382_n.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/66bb5091270b50f1c41ac024_455044800_6606366249965_8436262097933860040_n.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/66cef6c7ed872b62cb8bea57_457224967_808921028119872_5018399117241908670_n-p-1080.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/6575b7ed98b1f6fa87a2eb1e_409622962_652427310435912_2068314642423594846_n.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/64f372a7505aa955d6f10302_64ca77dcc2f7cef0b097a531_Kacchi%20bhai%2001%2008.0-p-500.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/67349521bab346e57fd3fdf0_466969985_864293049249336_4425944953291454281_n.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/65a26897fa5edfde776d9753_Sakrain-p-800.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-offset="300" className='offer-card w-[450px] h-[460px] flex flex-col items-center justify-center gap-5 border-2 border-[#FF0000] rounded-[25px]'>
        <div>
          <img className='w-[411px] h-[212px]' src="https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/660c083d6a58e59ea78021e2_434399345_717851097226866_1747747814796122381_n.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className='flex items-center justify-center gap-4'>
            <div>
              <FaLocationDot className='text-[50px] text-[#FF0000]'/>
            </div>
            <div>
              <h1 className='text-[20px] font-bold'>Foodie App</h1>
            </div>
          </div>
          <div>
              <p>
              Special note:-
              <br/>
              - Must use promo code KB40.
              <br/>
              - Offer valid till November 20, 2024.
              <br />
              - Minimum order 299 Tk
              <br />
              - Maximum discount is 120/= Taka
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
