import React from 'react'
import { LiaCopyright } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter, } from "react-icons/fa6";
import mastercard from '../assets/images/mastercard.png'
import visa from '../assets/images/visa.png'
import amex from '../assets/images/amex.png'


const Footer = () => {

    const links = [
        {
            title: 'About',
            link: [
                'Our company', 'Our story', 'Blog'
            ]

        },
        {
            title: 'Information',
            link: [
                'delivery information', 'privacy policy', 'terms & conditions', '  return'
            ]

        },
        {
            title: 'Support',
            link: [
                'contact us', 'help', 'FAQ', 'checkout'
            ]

        },
    ]
    return (
        <div className="w-full">
            <div className="py-10 w-full text-dark">
                <hr className='mb-5 border-gray border-t-2' />
                <div className="flex w-full items-baseline justify-center ">
                    <div className="  text-3xl font-bold">Furni<span className='text-primary'>Flex</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <hr className='mt-5 border-gray border-b' />
            </div>
            <div className='w-11/12 mx-auto my-10 '>
                <div className=" w-full flex    items-start gap-8 lg:gap-20   ">
                    {links.map((item, i) => {
                        return (
                            <div className="flex  mx-auto text-dark lg:items-center lg:justify-between " key={i}>
                                <div className="">
                                    <h1 className='font-bold text-xl'>{item.title}</h1>
                                    {item.link.map((val, index) => (
                                        <ul className='flex w-[100%] '>
                                            <li className='lg:text-lg text-sm hover:text-green cursor-pointer capitalize mb-2'>{val}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="py-5 bg-green h-20 w-full">
                <div className="w-11/12 mx-auto flex items-center h-full justify-between">
                    <div className="flex lg:items-center flex-col lg:flex-row">
                        <div className="flex items-center gap-1">
                            <div className="">Copyright</div>
                            <LiaCopyright />
                        </div>
                        <div className="lg:text-lg text-xs"> 2024 FurniFlex. All rights reserved</div>
                    </div>

                    <div className="lg:flex items-center gap-3 hidden ">
                        <div className="flex items-center gap-1">
                            <div className="h-6 w-6 rounded-full bg-[#3a5d60] items-center flex justify-center">
                                <FaInstagram className='text-xs' />
                            </div>
                            <div className="h-6 w-6 rounded-full bg-[#3a5d60] items-center flex justify-center">
                                <FaXTwitter className='text-xs' />
                            </div>
                            <div className="h-6 w-6 rounded-full bg-[#3a5d60] items-center flex justify-center">
                                <FaFacebookF className='text-xs' />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src={visa} alt="payment logo" className='h-10' />
                        <img src={mastercard} alt="payment logo" className='h-10' />
                        <img src={amex} alt="payment logo" className='h-10 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer