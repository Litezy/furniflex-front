import React from 'react'
import Layout from '../components/Layout'
import { CiMail } from "react-icons/ci";
import { FiPhoneIncoming } from "react-icons/fi";
import { FiPrinter } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import mapimg from '../assets/images/map.jpg'
import Shippings from '../assets/utils/Shippings';

const Contact = () => {


    const links = [
        {
            img: <CiMail />,
            title: 'Mail',
            desc: 'furniflex@company.com'
        },
        {
            img: < FiPhoneIncoming />,
            title: 'Phone',
            desc: '+88 23456789055'
        },
        {
            img: <FiPrinter />,
            title: 'Fax',
            desc: '(402) 8833-4475'
        },
        {
            img: <FaLocationArrow />,
            title: 'Office',
            desc: '5678 Seltice Way Coeur D Alene'
        },
    ]


    const socials = [
        {
            img: <FaInstagram />
        },
        {
            img: <FaXTwitter />
        },
        {
            img: <FaFacebookF />
        },
        {
            img: <FaPinterestP />
        },
    ]

    const [forms, setForms] = useState({
        name:'',
        email:'',
        phone:'',
        msg:''
    })
    return (
        <Layout>
            <div className="w-full h-full border lg:mt-10">
                <div className="w-11/12 mx-auto">
                    <div className="flex items-start flex-col lg:flex-row lg:gap-10 w-full">
                        <div className="lg:w-1/2 text-dark flex items-start flex-col gap-6 h-fit pb-10">
                            <div className="font-bold  text-4xl">Get in touch</div>
                            <div className="font-semibold">We're here for you every step of the way. Wether you have questions, need order assisstance, or want to share feedback, our friendly customer support team is ready to assist. Our team is here to reach out! Reach out to us via</div>
                            <div className="w-full">
                                {links.map((item, i) => {
                                    return (
                                        <div className="flex items-center gap-2 mb-10" key={i}>
                                            <div className={`${item.title === 'Mail' ? 'bg-[#fff0e6] text-[#ff6b0c]' : item.title === 'Phone' ? 'bg-[#ebeeff] text-[#294bff]' : item.title === 'Fax' ? 'bg-[#f4eefa] text-[#a674d9]' : 'bg-[#e7f7ef] text-[#65cd98]'}
                                 w-fit px-3 py-2 rounded-xl text-4xl`}>
                                                {item.img}</div>
                                            <div className="flex items-start flex-col">
                                                <div className="text-sm font-semibold">{item.title}</div>
                                                <div className="font-bold">{item.desc}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex items-start flex-col gap-2">
                                <div className="font-bold text-2xl lg:text-3xl">Stay Connected</div>
                                <div className="flex items-center gap-5">
                                    {socials.map((item, i) => (
                                        <div className="w-8 h-8 flex items-center justify-center text-[#d2992d] text-sm rounded-full bg-[#f8efdf]" key={i}>{item.img}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full bg-[#2d5356] h-fit rounded-2xl text-white">
                            <div className="h-full py-10 px-2">
                                <div className="w-full flex items-center justify-center flex-col">
                                    <div className="w-full text-center text-3xl lg:text-4xl font-bold ">Send us a message</div>
                                    <div className="text-center lg:w-[60%]">Your email address will not be published. Required fields are marked</div>
                                </div>


                                <div className="mt-5  w-11/12 mx-auto">
                                    <form className='w-full  flex-col flex items-start gap-5'>
                                        <div className="flex w-full items-start gap-2 flex-col">
                                            <div className="">Name</div>
                                        <input type='text' className='w-full h-10 bg-[#365e61] pl-4 outline-none lg:h-14 rounded-md '/>
                                        </div>
                                        <div className="flex w-full items-start gap-2 flex-col">
                                            <div className="">Email Address</div>
                                        <input type='email' className='w-full bg-[#365e61] pl-4 outline-none h-10 lg:h-14 rounded-md '/>
                                        </div>
                                        <div className="flex w-full items-start gap-2 flex-col">
                                            <div className="">Phone</div>
                                        <input type='number' className='w-full bg-[#365e61] pl-4 outline-none h-10 lg:h-14 rounded-md '/>
                                        </div>
                                        <div className="flex w-full items-start gap-2 flex-col">
                                            <div className="">Message</div>
                                        <textarea className='w-full h-32 py-2 pr-2 resize-none bg-[#365e61] pl-4 outline-none  rounded-md'></textarea>
                                        </div>
                                        <button className='w-full py-3 rounded-full text-center text-white bg-primary '>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:h-[35rem] h-fit py-10 lg:py-0 w-full">
                <img src={mapimg} alt="google map image" className='h-full lg:my-10 w-full object-contain lg:object-cover' />
                </div>
                <div className="w-11/12 lg:mt-10 mx-auto">
                    <Shippings/>
                </div>
            </div>
        </Layout>
    )
    
}

export default Contact