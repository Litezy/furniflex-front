import React from 'react'
import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { headers } from '../assets/utils/functions';
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { useRef } from 'react';
import { useEffect } from 'react';

const HeadSub = () => {
    const [sideview, setSideview] = useState(false)
    const [active, setActive] = useState('')
    const refDiv = useRef(null)

   
    return (
        <div className="w-full bg-top-bg ">
            <div className="w-11/12 mx-auto py-5 ">
                <div className=" h-full flex items-center justify-between  ">
                    <div className="text-3xl font-bold ">Furni<span className='text-delivery'>Flex</span></div>

                    <div className="lg:w-[40%] w-[60%] hidden md:flex ">
                        <ul className='flex items-center w-full justify-between'>
                            {headers.map((item, i) => (
                                <Link to={item.url} onClick={() => selectHeader(i)} className={`${active === i ? 'border-b border-primary' : ''} cursor-pointer`} key={i}>{item.title}</Link >
                            ))}
                        </ul>
                    </div>
                    <div className="md:flex items-center justify-between lg:w-[12%] w-[15%] hidden ">
                        <FiSearch className='text-xl' />
                        <MdOutlineFavoriteBorder className='text-xl' />
                        <FaBagShopping className='text-xl' />
                        <FaRegUser className='text-xl' />
                    </div>
                    <FaBarsStaggered onClick={() => setSideview(prev => !prev)} className='text-3xl md:hidden cursor-pointer' />
                </div>

                {sideview &&
                    <div ref={refDiv} className="w-[60%] text-white fixed top-0 right-0 h-screen bg-top-bg transition-all ease-in-out delay-500 py-3 px-2 ">
                        <AiOutlinePlus onClick={() => setSideview(prev => !prev)} className='text-5xl cursor-pointer  rotate-45' />
                        <div className="w-full h-fit py-5 rounded-xl px-10 ">
                            <div className="flex items-center flex-col gap-5 h-full py-5">
                                {headers.map((item, i) => {
                                    return (
                                        <Link to={item.url} className=" cursor-pointer hover:border-b font-bold" key={i}>{item.title}</Link>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="text-2xl text-gray font-bold w-full text-center">Favourites</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default HeadSub