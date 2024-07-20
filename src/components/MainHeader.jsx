import React, { useState } from 'react'

import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import firstImg from '../assets/images/homeimg.avif'
import secondImg from '../assets/images/homeimg2.avif'
import { useRef } from 'react';
import { useEffect } from 'react';


const MainHeader = () => {


    
    return (
        <div className="w-full overflow-hidden">
           
            <div className="mt-24 lg:pl-10 px-4 lg:px-0 w-full">
                <div className="flex items-center gap-10 w-full flex-col lg:flex-row">
                    <div className="flex items-start gap-8 flex-col lg:w-1/2">
                        <div className="w-fit px-3 py-1 rounded-full bg-[#426467] uppercase text-sm">future design ideas</div>
                        <div className="lg:text-6x text-5xl font-bold capitalize ">Modern Interior design studio</div>
                        <div className="text-p">Choosing the right furniture for your home online will add elegance and functionality to your interior while also beign cost effective and long lasting</div>
                        <div className="flex items-center gap-5">
                            <div className="flex cursor-pointer items-center gap-2 bg-primary px-4 py-2 rounded-full">
                                <div className="">Shop Now</div>
                                <IoIosArrowRoundForward className='text-xl' />
                            </div>
                            <div className="underline cursor-pointer">Follow Instagram</div>
                        </div>

                    </div>

                    <div className="lg:w-1/2 overflow-auto lg:overflow-hidden">
                        <div className="flex lg:items-center items-baseline gap-2">
                            <div className="relative w-[70%]">
                                <img src={firstImg} alt="home image" className="w-full lg:h-[70dvh] h-[30dvh]object-cover rounded-md" />
                                <span className=" absolute w-full bottom-2">
                                    <div className="flex items-center text-sm justify-between px-3 w-full font-bold lg:text-lg">
                                        <div className="">Bed Room</div>
                                        <div className="lg:text-white text-p">1200+ item</div>
                                    </div>

                                </span>
                            </div>
                            <div className=" relative w-fit">
                                <img src={secondImg} alt="home image" className="w-32 lg:h-[70dvh] h-[30dvh] object-cover rounded-md" />
                                <span className=" absolute w-full bottom-12 -rotate-90 text-sm lg:text-[1.1rem]">Living Room</span>
                            </div>
                            <div className=" relative ">
                                <img src={secondImg} alt="home image" className="w-32 h-[30dvh] lg:h-[70dvh] object-cover rounded-md" />
                                <span className=" absolute w-full bottom-12 -rotate-90 text-sm lg:text-[1.1rem]">Waiting Room</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start mt-6 gap-4 w-full ">
                    <div className="lg:w-1/2 w-full">
                        <div className="flex  items-center justify-between lg:w-2/3">
                            <div className="flex flex-col items-start ">
                                <div className="font-bold text-2xl">2500+</div>
                                <div className="text-p">Unique Styles</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="font-bold text-2xl">5000+</div>
                                <div className="text-p">Happy Customers</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="font-bold text-2xl">300+</div>
                                <div className="text-p">Certified Outlets</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-1/2">
                        <div className="px-5 py-1 rounded-full bg-[#426467]">
                            <IoIosArrowRoundBack className='text-2xl' />
                        </div>
                        <div className="px-5 py-1 rounded-full bg-primary">
                            <IoIosArrowRoundForward className='text-2xl' />
                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default MainHeader