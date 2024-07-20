import React from 'react'
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const FirstHeadContact = () => {
    return (
        <div className="w-full bg-primary">
            <div className="w-full h-12 ">
                <div className="w-11/12 mx-auto  h-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="">Follow Us</div>
                        <div className="flex items-center gap-1">
                            <div className="h-6 w-6 rounded-full bg-[#d59f39] items-center flex justify-center">
                                <FaInstagram className='text-xs' />
                            </div>
                            <div className="h-6 w-6 rounded-full bg-[#d59f39] items-center flex justify-center">
                                <FaXTwitter className='text-xs' />
                            </div>
                            <div className="h-6 w-6 rounded-full bg-[#d59f39] items-center flex justify-center">
                                <FaFacebookF className='text-xs' />
                            </div>
                        </div>
                    </div>

                    <div className="">Sign up get 20% Off for all collection</div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt />
                        <div className="">+1 (100) 234-5678</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstHeadContact