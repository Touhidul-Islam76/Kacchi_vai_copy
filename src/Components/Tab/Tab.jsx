import React, { useEffect, useState } from 'react';
import '../Tab/Tab.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Single from '../Single/Single';

const Tab = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          infinite: true, 
        });
      }, []);
    

    const[popular,setPopular]=useState([]);
    const [kacchi,setKacchi]=useState([]);
    const [polao,setPolao]=useState([]);
    const [chuigost,setChuigost]=useState([]);
    const [sweet,setSweet]=useState([]);
    const [others,setOthers]=useState([]);
    
    
    useEffect(()=>{
        fetch('Popular.json')
        .then(res=>res.json())
        .then(data=>setPopular(data))

        fetch('Kacchi.json')
        .then(res=>res.json())
        .then(data=>setKacchi(data))

        fetch('Polao.json')
        .then(res=>res.json())
        .then(data=>setPolao(data))

        fetch('Chuigost.json')
        .then(res=>res.json())  
        .then(data=>setChuigost(data))

        fetch('Sweet.json')
        .then(res=>res.json())
        .then(data=>setSweet(data))

        fetch('Others.json')
        .then(res=>res.json())
        .then(data=>setOthers(data))
    },[])

    const [activeTab, setActiveTab] = useState('popular');
    const tabhandler = (activeTab) => {
      setActiveTab(activeTab);
    }
  return (
    <div>
      <div className='my-[5rem]'>        
        <h1 data-aos="zoom-in" className='text-center text-3xl font-bold b-title underline'>Our Special Menu</h1>        
    </div>

    <div className='tab'>
      <div className="tab-background">
        <div className="tab-btn flex flex-wrap gap-6 justify-center mb-[40px] text-[#FF0000] text-[20px] font-semibold">
          <button className={`btn p-2 text-[12px] md:text-[20px] transition duration-300 ease-in ${activeTab === 'popular' ? ' active' : ''}`} onClick={() => tabhandler('popular')}>Popular</button>
          <button className={`btn p-2 text-[12px] md:text-[20px] transition duration-300 ease-in ${activeTab === 'kacchi' ? ' active' : ''}`} onClick={() => tabhandler('kacchi')}>Kacchi</button>
          <button className={`btn p-2 text-[12px] md:text-[20px] transition duration-300 ease-in ${activeTab === 'polao' ? ' active' : ''}`} onClick={() => tabhandler('polao')}>Polao</button>
          <button className={`btn p-2 text-[12px] md:text-[20px] transition duration-300 ease-in ${activeTab === 'chuigost' ? ' active' : ''}`} onClick={() => tabhandler('chuigost')}>Chuigost</button>
          <button className={`btn p-2 text-[12px] md:text-[20px] transition duration-300 ease-in ${activeTab === 'sweet' ? ' active' : ''}`} onClick={() => tabhandler('sweet')}>Sweet & Drinks</button>
          <button className={`btn p-2 text-[12px] md:text-[20px] transition duration-300 ease-in ${activeTab === 'others' ? ' active' : ''}`} onClick={() => tabhandler('others')}>Others</button>
        </div>
      </div>

      <div className="tab-content bg-[#FFF2F2] py-12 w-[85%] rounded-bl-[120px] rounded-tr-[120px] mb-12 mx-auto">
        {activeTab === 'popular' && 

        <div className='flex flex-wrap gap-3 w-[75%] mx-auto tab-info'>
          {
            popular.map((item,index)=> <Single key={index} item={item}></Single>)
          }
        </div>
          
        }

      {activeTab === 'kacchi' && 
      
      <div className='flex flex-wrap gap-3 w-[75%] mx-auto tab-info'>
        {
          kacchi.map((item,index)=> <Single key={index} item={item}></Single>)
        }
      </div>
        
      }

      {activeTab === 'polao' && 
      
      <div className='flex flex-wrap gap-3 w-[75%] mx-auto tab-info'>
        {
          polao.map((item,index)=> <Single key={index} item={item}></Single>)
        }
      </div>
        
      }

      {activeTab === 'chuigost' && 
      
      <div className='flex flex-wrap gap-3 w-[75%] mx-auto tab-info'>
        {
          chuigost.map((item,index)=> <Single key={index} item={item}></Single>)
        }
      </div>
        
      }

      {activeTab === 'sweet' && 
      
      <div className='flex flex-wrap gap-3 w-[75%] mx-auto tab-info'>
        {
          sweet.map((item,index)=> <Single key={index} item={item}></Single>)
        }
      </div>
        
      }

      {activeTab === 'others' && 
      
      <div className='flex flex-wrap gap-3 w-[75%] mx-auto tab-info'>
        {
          others.map((item,index)=> <Single key={index} item={item}></Single>)
        }
      </div>
        
      }
      </div>
    </div>
    </div>

    
  )
}

export default Tab
