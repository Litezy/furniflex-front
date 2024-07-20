import React, { useState } from 'react'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import img1 from '../assets/images/chair1.png'
import img2 from '../assets/images/chair2.png'
import img3 from '../assets/images/table1.jpg'
import img4 from '../assets/images/clock1.png'
import img5 from '../assets/images/clock2.png'
const Features = () => {

    const items = [
        {
            title:'Side Table',
            img:img1,
            desc:'Discover 120 products'
        },
        {
            title:'Arm Chair',
            img:img1,
            desc:'Discover 45 products'
        },
        {
            title:'Dinner Chair',
            img:img2,
            desc:'Discover 120 products'
        },
        {
            title:'Wall Clock 1',
            img:img4,
            desc:'Discover 120 products'
        },
        {
            title:'Wall Clock 2',
            img:img5,
            desc:'Discover 120 products'
        },
    ]

    const items2=[
        {
            title:'Dinner Chair',
            img:img2,
            desc:'Discover 120 products'
        },
        {
            title:'Wall Clock 1',
            img:img4,
            desc:'Discover 120 products'
        },
        {
            title:'Wall Clock 2',
            img:img5,
            desc:'Discover 120 products'
        },
        {
            title:'Side Table',
            img:img1,
            desc:'Discover 120 products'
        },
        {
            title:'Arm Chair',
            img:img1,
            desc:'Discover 45 products'
        },
       
    ]

    const items3 =[
        {
            title:'Wall Clock 2',
            img:img5,
            desc:'Discover 120 products'
        },
        {
            title:'Side Table',
            img:img1,
            desc:'Discover 120 products'
        },
        {
            title:'Arm Chair',
            img:img1,
            desc:'Discover 45 products'
        },
        {
            title:'Dinner Chair',
            img:img2,
            desc:'Discover 120 products'
        },
        {
            title:'Dinner Chair',
            img:img2,
            desc:'Discover 120 products'
        },
    ]

    const allItems = [items,items2, items3]

    const [active, setActive]= useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleDotClick = (index) => {
        if (index !== active) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActive(index);
                setIsTransitioning(false);
            }, 800); // Set the delay time to match the CSS transition duration
        }
    };


    const nextBtn = () => {
        if (active === allItems.length) {
            setActive(allItems.length);
        } else {
            setActive(active + 1);
        }
    };
    
    const prevBtn = () => {
        if (active === 0) {
            setActive(allItems.length - 1);
        } else {
            setActive(active - 1);
        }
    };
    


  

  return (
    <div className='mb-10 w-11/12 mx-auto '>
        <div className="flex items-center justify-between">
            <div className="text-dark font-bold text-xl md:text-3xl">Featured Categories</div>
            <div onClick={prevBtn} className="flex items-center gap-6">
              <div className="px-3 rounded-full border border-primary cursor-pointer">
                <IoIosArrowRoundBack className="text-3xl text-primary" />
              </div>
              <div onClick={nextBtn} className="px-3 rounded-full  cursor-pointer bg-primary">
                <IoIosArrowRoundForward className="text-3xl cursor-pointer" />
              </div>
            </div>
        </div>

        <div className="mt-5 w-full overflow-hidden">
        <div className={`w-full grid grid-cols-2 lg:grid-cols-5 items-center gap-5 justify-between transition-container `}>
                {allItems[active] && allItems[active].map((item,i) =>(
                    <>
                    <div className="text-dark flex flex-col items-center gap-1" key={i}>
                       <div className="h-32 lg:h-40 lg:w-40 w-32 rounded-full bg-gray flex items-center justify-center">
                       <img src={item.img} alt="images" className='w-full h-full lg:h-40 self-stretch object-contain'/>
                       </div>
                       <div className="text-center">
                       <div className="font-bold">{item.title}</div>
                       <p className='text-sm'>{item.desc}</p>
                       </div>
                    </div>
                    </>
                ))}
            </div>
            <div className="w-full hidden lg:flex mt-10  border-primary">
            <div className="w-full flex items-center justify-center gap-2 ">
            {new Array(allItems.length).fill(0).map((_,i) =>(
                    <div onClick={()=> handleDotClick(i)} className={`${active === i ? 'bg-green px-4 py-2':
                        'bg-grey h-4 w-4 '} cursor-pointer rounded-full`} key={i}></div>
                   ))}
                 
            </div>
            </div>
        </div>
    </div>
  )
}

export default Features