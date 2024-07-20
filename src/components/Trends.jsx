import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { BsFillCartDashFill } from "react-icons/bs";
import { formatter } from '../assets/utils/functions';
import FlashSale from './FlashSale';

const Trends = ({data}) => {
    const [active, setActive] = useState(0);
    const headers = ['bed room', 'living room', 'dining room', 'outdoor', 'indoor'];
    const [images, setImages] = useState([]);

    const selectHeader = (i) => {
        setActive(i);
    };


    return (
        <div className='w-11/12 mx-auto py-14'>
            <div className="flex items-center justify-between w-full">
                <div className="text-dark text-lg md:text-3xl font-bold w-52 lg:w-1/3">Trending products for you!</div>
                <div className="flex items-center gap-3 px-3 py-3 bg-primary rounded-md">
                    <div className='text-xs md:text-lg'>View All Product</div>
                    <IoIosArrowRoundForward className='lg:text-2xl' />
                </div>
            </div>
            <div className="flex pt-10 items-center gap-4 w-fit mr-auto">
                {headers.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => selectHeader(i)}
                        className={`lg:text-lg text-sm ${active === i ? 'border-b border-green text-green font-bold  ' : 'text-dark'} cursor-pointer capitalize`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className="grid mt-10 w-full   grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {data && data.slice(0,6).map((item, i) => {
                    // const isEven = 
                    return (
                        <div className="bg-gray mb-10 w-[90%] mx-auto h-72 border rounded-md pt-3" key={i}>
                            <div className="px-2 w-full">
                                <div className="flex items-center justify-between">
                                    <div className="px-2 py-1 rounded-full bg-green text-xs">
                                        {i % 2 === 0 ? '-10%':'20%'}
                                    </div>
                                    <div className={`px-1 py-1 rounded-full bg-white ${i % 2 === 0 ? 'text-red-500':'text-dark'}`}>
                                        <MdOutlineFavorite className='text-lg' />
                                    </div>
                                </div>
                                <div className="mb-3 w-full mt-3">
                                {item.images[0] ? <img src={item.images[0]} className="w-full h-40  object-contain" alt={`Product ${i}`} /> :'No image to display, pls check your internet connection!'}
                                    
                                </div>
                            </div>
                            <div className="h-20 rounded-xl w-full bg-green px-5">
                                <div className={`flex h-full w-full justify-between items-center`}>
                                    <div className="h-full flex items-start justify-center flex-col">
                                        <div className="">{item.title}</div>
                                        <div className="">{formatter.format(item.price)}</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                        <BsFillCartDashFill className='text-primary text-2xl cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <FlashSale data={data}/>
        </div>
    );
};

export default Trends;
