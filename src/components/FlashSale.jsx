import React from 'react'
import { LuTimer } from "react-icons/lu";
import { formatter } from '../assets/utils/functions';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Reviews from './Reviews';


const FlashSale = ({ data }) => {

   
    return (
        <div className='w-full text-dark py-10'>
            <div className="flex items-start lg:flex-row flex-col gap-10 w-full">
                <div className="lg:w-[60%] bg-gray h-fit py-5 px-5 rounded-md">
                    <div className="flex items-start flex-col gap-5 lg:gap-0 lg:flex-row w-full justify-between">
                        <div className="flex items-start gap-3 flex-col lg:w-1/2">
                            <div className="font-bold text-2xl text-dark">Flash Sale!</div>
                            <p className='text-sm md:text-lg'>Act fast to grab incredible deals on select beauty pieces in our limited-time flash sale</p>
                        </div>
                        <div className="flex flex-col lg:items-center gap-2 lg:w-1/2">
                            <div className="flex items-center gap-1">
                                <LuTimer className=' text-dark' />
                                <div className="text-sm text-dark">End time</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-2 py-1 bg-white text-dark rounded-md">12 H</div>
                                <div className="px-2 py-1 bg-white text-dark rounded-md">36 M</div>
                                <div className="px-2 py-1 bg-white text-dark rounded-md">57 S</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col lg:flex-row lg:items-center items-start mt-3 ">
                        {data && data.slice(6, 7).map((item, i) => {
                            return (
                                <>
                                    <div className="lg:w-1/2 " key={i}>
                                        <div  className="flex items-center flex-col ">
                                            <img src={item.images[0]} className=' lg:w-full h-60  object-contain' alt="" />
                                            <div className="flex items-center gap-5">
                                                <div className="text-2xl font-bold">{formatter.format(item.price)}</div>
                                                <div className="  line-through text-grey">{formatter.format('200')}</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="lg:w-1/2 flex mt-3 lg:mt-0 gap-3 item-start flex-col">
                                        <div className="text-2xl  font-semibold">{item.title}</div>
                                        <div className="">{item.description}</div>
                                        <div className=" cursor-pointer text-white flex items-center gap-3 w-fit px-3 py-2 bg-primary rounded-full">
                                            <div>Shop Now</div>
                                            <IoIosArrowRoundForward className='text-2xl' />
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className="lg:w-[40%] w-full ">

                    {data && data.slice(7, 9).map((item, i) => {
                        return (
                            <>
                                <div className="w-full flex items-start flex-col " key={i}>
                                    <div className=" lg: bg-gray rounded-md mb-8 py-2 w-full px-5">
                                        <div className="flex items-center justify-center w-full">
                                            <img src={item.images[0]} className=' w-full h-40  object-contain' />
                                        </div>
                                        <div className="flex items-center  justify-between ">
                                            <div className="font-bold text-2xl">{item.title}</div>
                                            <div className="px-4 cursor-pointer w-fit py-1 rounded-full bg-primary text-white">
                                                <IoIosArrowRoundForward className='text-2xl' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="py-10">
                <div className="flex flex-col lg:flex-row items-start gap-10 w-full">
                    <div className="lg:w-1/2 lg:h-96 rounded-md px-2">
                        <div className=" bg-flash bg-cover image h-full rounded-xl ">
                            <div className="w-full h-full rounded-xl bg-black/60 py-5 lg:pl-14 px-3 lg:px-0 text-white flex items-center justify-center">
                                <div className="w-full flex items-start flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#e1e2e1] text-[1.2em]">Exclusive offer</div>
                                        <div className="px-3 py-1 bg-white text-primary text-xs rounded-full uppercase">15% off</div>
                                    </div>
                                    <div className=" capitalize font-bold text-3xl lg:w-[50%]">Best online deals, free stuff</div>
                                    <div className="text-[#e1e2e1] text-[1.1rem]">Only on this week..... Don't miss</div>
                                    <div className="flex items-center gap-3 px-3 py-2 text-white bg-primary rounded-full">
                                        <div>Get Best Deal</div>
                                        <IoIosArrowRoundForward className='text-2xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:h-96 rounded-xl py-5 px-3 lg:px-0 lg:pl-14 lg:w-1/2 bg-gray flex items-center justify-center">
                        <div className="w-full flex items-start flex-col gap-4">
                            <div className="text-[1.2rem]">Regular offer</div>
                            <div className=" capitalize font-bold text-3xl lg:w-[50%]">10% cash-back on personal care</div>
                            <div className="text-[1.1rem]">Max cash-back: $12. Code: DTWI3477JH</div>
                            <div className="flex items-center gap-3 px-3 py-2 text-white bg-green rounded-full">
                                <div>Shop Now</div>
                                <IoIosArrowRoundForward className='text-2xl' />
                            </div>
                        </div></div>

                </div>
            </div>
           <Reviews/>
        </div>
    )
}

export default FlashSale