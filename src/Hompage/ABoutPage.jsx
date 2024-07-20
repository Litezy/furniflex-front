import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import img1 from '../assets/images/aboutus/aboutus1.jpg'
import img2 from '../assets/images/aboutus/aboutus2.jpg'
import img3 from '../assets/images/aboutus/aboutus3.jpg'
import img4 from '../assets/images/aboutus/aboutus4.jpg'
import img5 from '../assets/images/aboutus/aboutus5.jpg'
import img6 from '../assets/images/aboutus/aboutus6.jpg'
import ceoimg1 from '../assets/images/aboutus/ceo1.jpg'
import ceoimg2 from '../assets/images/aboutus/ceo2.jpg'
import ceoimg3 from '../assets/images/aboutus/ceo3.jpg'
import rocketimg from '../assets/images/aboutus/rocket.png'
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { BsFillAwardFill } from "react-icons/bs";
import { GrGrow } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Reviews from '../components/Reviews'
import { MoveToTop } from '../assets/utils/functions';


const ABoutPage = ({ }) => {


  const aboutus = [
    {
      img: img3,
      icons: <FaHandsHoldingCircle />,
      title: 'From Humble Beginnings',
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quis delectus aspernatur facilis est odit dicta ab atque optio fugiat eveniet, quo earum labore iusto, non repudiandae rerum nesciunt consequatur!"
    },
    {
      img: img4,
      icons: <BsFillAwardFill />,
      title: 'Milestones and Achievements',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quis delectus aspernatur facilis est odit dicta ab atque optio fugiat eveniet, quo earum labore iusto, non repudiandae rerum nesciunt consequatur!'

    },
    {
      img: img1,
      icons: <GrGrow />,
      title: 'Growth and Innovasion',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quis delectus aspernatur facilis est odit dicta ab atque optio fugiat eveniet, quo earum labore iusto, non repudiandae rerum nesciunt consequatur!'

    },
    {
      img: img5,
      icons: <FaGlobe />,
      title: 'Our Global Reach',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quis delectus aspernatur facilis est odit dicta ab atque optio fugiat eveniet, quo earum labore iusto, non repudiandae rerum nesciunt consequatur!'

    },
    {
      img: img6,
      icons: <FaArrowAltCircleUp />,
      title: 'Looking Ahead',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quis delectus aspernatur facilis est odit dicta ab atque optio fugiat eveniet, quo earum labore iusto, non repudiandae rerum nesciunt consequatur!'

    },
  ]


  const ceos = [
   
    {
      img:ceoimg1,
      name:'Nikita Xing',
      desc:'Ceo & Owner'
    },
    {
      img:ceoimg2,
      name:'Harsh Patel',
      desc:'Lead Interior Designer'
    },
    {
      img:ceoimg1,
      name:'Sasha Grey',
      desc:'DIY Expert'
    },
  ]

  useEffect(()=>{
    MoveToTop()
  },[])
  return (
    <Layout>
      <div className="lmd:mt-10 w-full updiv">
        <div className="lg:w-[30%] text-center w-11/12 mx-auto text-dark font-bold text-2xl lg:text-3xl capitalize">Discover FurniFlex- Where innovation meets design</div>
        <div className="my-10 lg:w-[60%] w-11/12  mx-auto">
          <img src={img1} className='w-full lg:h-[20rem] object-cover rounded-xl' alt="boutus img" />
        </div>
        <div className="flex items-center justify-center gap-5 flex-col lg:py-10 w-11/12 mx-auto text-dark">
          <div className="">Furniflex Challenging</div>
          <div className="font-bold text-2xl">The FurniFlex Journey Story</div>
          <div className="lg:w-[60%] mx-auto text-center text-[1rem] font-semibold">The FurniFlex Journey: transforming spaces with innovative design. Explore our story of craftmanship and style, creating furniture and cosmetics that inspires and enhances modern living</div>
        </div>

        <div className="lg:py-10 py-6 flex items-center w-11/12 mx-auto gap-5 flex-col">
          {aboutus.map((item, i) => {
              
            return (
              <>
              <div className="flex items-start flex-col lg:flex-row w-full gap-6 lg:gap-5 " key={i}>
                <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} `}>
                  <img src={item.img} className='w-full lg:h-[25rem] h-rem] rounded-xl' alt="" />
                </div>
                <div className={`lg:${i % 2 === 0 ? 'order-2' : 'order-1'}  text-dark lg:w-1/2 flex items-start gap-5 flex-col`}>
                  <div className="w-fit px-4 py-2 rounded-md bg-aboutbg ">
                    <div className='text-about text-2xl'>{item.icons}</div>
                  </div>
                  <div className="font-bold text-3xl">{item.title}</div>
                  <div className="text-[1.2rem] ">{item.desc}</div>
                </div> 
               
              </div> 
              <hr className='h-2 rounded-md my-5 w-full bg-green ' />
              </>     
            )
          })}
          
        </div>
       <div className="w-11/12 mx-auto py-10">
       <div className="text-green font-bold text-3xl w-full text-center mb-5">Our Awesome Team</div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto mb-20 gap-10 md:gap-6 lg:gap-0">
        {ceos.map((item,i) => {
          return (
            <div className="lg:w-[90%] px-3 w-[80%] mx-auto items-center justify-center bg-gray rounded-xl gap-2 flex py-2 flex-col" key={i}>
              <div className="w-full ">
                <img src={item.img}  className='bg-cover rounded-xl w-full h-[20rem] ' alt="" />
              </div>
              <div className="w-full px-2 py-2 group cursor-pointer text-dark hover:text-white bg-white cursor-pointe hover:bg-green rounded-xl h-20 flex items-center justify-between">
                <div className="flex items-start gap-1 flex-col ">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm">{item.desc}</div>
                </div>
                <div className="flex items-center gap-2 r">
                  <div className="w-fit py-2 px-2 rounded-full bg-[#eaeeee] group-hover:bg-[#426467]">
                    <FaInstagram className='text-xs'/>
                  </div>
                  <div className="w-fit py-2 px-2 rounded-full bg-[#eaeeee] group-hover:bg-[#426467]">
                    <FaXTwitter className='text-xs'/>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

       </div>
         <Reviews lg={false}/>
       </div>
      </div>

    </Layout>
  )
}

export default ABoutPage