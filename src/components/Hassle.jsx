import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi"

const Hassle = () => {
  return (
    <div className="flex lg:items-center flex-col lg:flex-row justify-between w-full gap-10">
                <div className="flex flex-col gap-1 lg:w-[60%] text-dark">
                    <div className="pl-2 h-10 w-10 rounded-full bg-[#e6ebe7]">
                        <div className="w-10 h-10 py-1 flex items-center justify-center rounded-full bg-delivery"> <FaTruck className='text-2xl text-dark' />
                        </div>
                    </div>
                    <div className="capitalize font-bold text-xl lg:text-2xl">Fast & free shipping</div>
                </div>
                <div className="flex flex-col gap-1 lg:w-[60%] text-dark">
                    <div className="pl-2 h-10 w-10 rounded-full bg-[#e6ebe7]">
                        <div className="w-10 h-10 py-1 flex items-center justify-center rounded-full bg-delivery"> <FaShopify className='text-2xl text-dark' />
                        </div>
                    </div>
                    <div className="capitalize font-bold text-xl lg:text-2xl">Easy to shop</div>
                </div>
                <div className="flex flex-col gap-1 lg:w-[60%] text-dark">
                    <div className="pl-2 h-10 w-10 rounded-full bg-[#e6ebe7]">
                        <div className="w-10 h-10 py-1 flex items-center justify-center rounded-full bg-delivery"> <MdOutlineSupport className='text-2xl text-dark' />
                        </div>
                    </div>
                    <div className="capitalize font-bold text-xl lg:text-2xl">24/7 support</div>
                </div>
                <div className="flex flex-col gap-1 lg:w-[60%] text-dark">
                    <div className="pl-2 h-10 w-10 rounded-full bg-[#e6ebe7]">
                        <div className="w-10 h-10 py-1 flex items-center justify-center rounded-full bg-delivery"> <BiTransferAlt className='text-2xl text-dark' />
                        </div>
                    </div>
                    <div className="capitalize font-bold text-xl lg:text-2xl">hassle free returns</div>
                </div>
            </div>
  )
}

export default Hassle