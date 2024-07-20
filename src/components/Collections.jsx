import React from 'react'

import tableimg from '../assets/images/table.png'
import lampimg from '../assets/images/lamp.png'
import chairimg from '../assets/images/chair.png'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Hassle from './Hassle';

const Collections = () => {

    const tables = [
        'Square table', 'Round Table', 'Wooden table', 'Glass table'
    ]
    const lights = ['Flore lamps', 'Tripod lamps', 'Table lamps', 'Study lamps']
    const chairs = ['Arm chair', 'Wing chair', 'Cafe chair', 'Wheels chair']
    return (
        <div className='pt-20 pb-5 w-11/12 mx-auto '>
           <Hassle/>

            <div className="py-16 w-full border flex-col lg:flex-row flex items-start gap-5">
                <div className="lg:w-[60%]  w-full  flex items-start gap-10 flex-col">
                    <div className="w-full bg-gray   rounded-md py-2 px-5">

                        <div className="flex w-full items-center  justify-between">
                            <div className="lg-w-fit w-2/4">
                                <div className="mb-5 bg-white text-[#658183] font-bold px-3 py-1 rounded-full w-fit">New Collection</div>
                                <div className="text-lg font-bold text-green">Center Table</div>
                                <ul>
                                    {tables.map((table) => (
                                        <li className="capitalize text-dark text-sm py-1">{table}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className=" lg:w-3/4 w-2/4  lg:-mt-5">
                                <img src={tableimg} alt="chair image" className='w-full h-40 self-stretch object-contain' />
                            </div>
                        </div>
                        <div className=" mt-3 flex items-center gap-1 text-green cursor-pointer underline">
                            <div className="font-bold">View all</div>
                            <IoIosArrowRoundForward className='font-bold text-xl ' />
                        </div>
                    </div>




                    <div className="flex w-full flex-col lg:flex-row items-start gap-10">
                        <div className="bg-gray  rounded-md lg:w-1/2 lg:h-[15.5rem]  px-5">
                            <div className="flex w-full mt-5 items-start  justify-between">
                                <div className="">
                                    <div className="mb-3 bg-white text-[#658183] font-bold px-3 py-1 rounded-full w-fit">New Collection</div>
                                    <div className="text-lg font-bold text-green">Lighting lamp</div>
                                    <ul>
                                        {lights.map((light) => (
                                            <li className="capitalize text-dark text-sm py-1">{light}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className=" w-2/4 ">
                                    <img src={lampimg} alt="chair image" className='w-full  object-cover' />
                                </div>
                            </div>
                            <div className=" mt-2 flex items-center gap-1 text-green cursor-pointer underline">
                                <div className="font-bold">View all</div>
                                <IoIosArrowRoundForward className='font-bold text-xl ' />
                            </div>
                        </div>

                        <div className="bg-green w-full py-8 lg:py-0 lg:h-[15.5rem] flex items-center flex-col gap-2 justify-center rounded-md lg:w-1/2">
                            <div className="w-fit px-4 py-2 rounded-full bg-primary text-2xl">Get Discount</div>
                            <div className="font-bold text-3xl">20% OFFER</div>
                        </div>
                    </div>

                </div>


                <div className="lg:w-[40%] w-full lg:h-[88.5dvh] h-fit py-2 flex flex-col rounded-md bg-gray">
                    <div className="w-full px-5 pt-5">
                        <div className="mb-5 bg-white text-[#658183] font-bold px-3 py-1 rounded-full w-fit">New Collection</div>
                        <div className="text-lg font-bold text-green">Accent Chairs</div>
                        <ul>
                            {chairs.map((chair) => (
                                <li className="capitalize text-dark text-sm py-1">{chair}</li>
                            ))}
                        </ul>
                        <div className=" mt-5 flex items-center gap-1 text-green cursor-pointer underline">
                            <div className="font-bold">View all</div>
                            <IoIosArrowRoundForward className='font-bold text-xl ' />
                        </div>
                    </div>
                    <div className=" ml-auto w-fit lg:w-3/4 -mt-32  lg:-mt-32">
                        <img src={chairimg} alt="chair image" className='lg:w-full w-68 lg:h-fit h-[30dvh] self-stretch object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections