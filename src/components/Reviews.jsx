import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import ceo1 from '../assets/images/ade.jpg'
import ceo2 from '../assets/images/ceo.jpg'

const Reviews = ({lg=true}) => {
  return (
    <div className={`${lg === true && 'lg:py-10'} text-dark`}>
                <div className="flex w-full items-center justify-between">
                    <div className="lg:text-3xl font-bold lg:w-[25%] w-1/2">Don't take our words, see what clients say</div>
                    <div className="flex items-center gap-6">
                        <div className="px-3 rounded-full border border-primary cursor-pointer">
                            <IoIosArrowRoundBack className="text-3xl text-primary" />
                        </div>
                        <div className="px-3 rounded-full text-white cursor-pointer bg-primary">
                            <IoIosArrowRoundForward className="text-3xl cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-0">
                    <div className="lg:w-[65%] bg-green h-fit py-2 px-2 rounded-xl">
                        <div className="flex items-center flex-col lg:flex-row gap-6">
                            <img src={ceo1} alt="" className='self-start w-fit lg:h-96 h-72 bg-cover lg:object-contain rounded-md' />
                            <div className="flex items-start flex-col gap-5 w-full text-white">
                                <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa deleniti quidem nam nobis totam aliquam quisquam maxime praesentium architecto assumenda dignissimos ratione, ipsum necessitatibus nemo ea laboriosam libero quo? Deleniti praesentium porro culpa.</div>
                                <hr className='bg-gray w-full' />
                                <div className="flex items-start gap-1 flex-col">
                                    <div className="">Adetola Adetunji</div>
                                    <div className="text-xs">Lagos, Nigeria</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[30%] lg:ml-auto mx-auto h-fit ">
                        <div className="bg-gray w-fit py-2 px-2 ml-auto rounded-md flex flex-col items-start gap-4">
                            <img src={ceo2} alt="" className='w-full h-96 object-contain rounded-md' />
                            
                        </div>

                    </div>
                </div>
            </div>
  )
}

export default Reviews