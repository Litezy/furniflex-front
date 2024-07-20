import React, { useRef, useEffect } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { headers, MoveToTop } from '../assets/utils/functions';
import { useSelect } from '../context/SelectContext';


const Header = ({ closeDivRef, furniDiv, topDiv }) => {

    const [active, setActive] = useState()
    const refDiv = useRef(null)
    const [sideview, setSideview] = useState(false)
    const navigate = useNavigate()
    const { select = [] } = useSelect();
    const {login,setLogin} = useSelect()


    useEffect(() => {
        // Initialize active state based on the current URL pathname
        const pathname = location.pathname;
        const index = headers.findIndex(item => item.url === pathname);
        if (index !== -1) {
            setActive(index);
        }
    }, [location.pathname]);

    const selectHeader = (index, url) => {
        setActive(index)
        navigate(url)
        MoveToTop()
    }
    useEffect(() => {
        if (refDiv) {
            window.addEventListener('click', (e) => {
                if (refDiv.current !== null) {
                    if (!refDiv.current.contains(e.target)) {
                        setSideview(false)
                    }
                }
            }, true)
        }
    }, [])

    useEffect(() => {
        if (refDiv.current) {
            if (sideview) {
                refDiv.current.classList.add('sideview-enter-active');
                refDiv.current.classList.remove('sideview-exit-active');
            } else {
                refDiv.current.classList.add('sideview-exit-active');
                refDiv.current.classList.remove('sideview-enter-active');
            }
        }
    }, [sideview]);

    //  console.log(login)

    return (
        <div className='w-full h-full relative'>
            <div className={` fixed w-full bg-top-bg z-50 top-0 left-0  h-fit  lg:pt-0`}>
                {topDiv && <div className="w-full bg-primary close hidden lg:block" ref={closeDivRef}>
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
                </div>}
                <div className={`w-11/12 mx-auto   ${!topDiv && sideview ? 'pt-5' : "py-5"}  `} ref={furniDiv}>
                    <div className=" h-full flex items-center   justify-between  ">
                        <div className="text-3xl font-bold ">Furni<span className='text-delivery'>Flex</span></div>

                        <div className="lg:w-[40%] w-[60%] hidden md:flex ">
                            <ul className='flex items-center w-full justify-between'>
                                {login ?
                                headers.map((item, index) => {
                                    return (
                                        <div onClick={() => selectHeader(index, item.url)} className={`${active === index ? 'border-b border-primary' : ''} cursor-pointer`} key={index}>
                                            {item.title}</div >
                                    )
                                }):
                                headers.slice(0, headers.length-1).map((item, index) => {
                                    return (
                                        <div onClick={() => selectHeader(index, item.url)} className={`${active === index ? 'border-b border-primary' : ''} cursor-pointer`} key={index}>
                                            {item.title}</div >
                                    )
                                })
                                }
                            </ul>
                        </div>
                        {login ? <div className="md:flex items-center justify-between lg:w-[12%] w-[15%] hidden ">
                            <FiSearch className='text-xl cursor-pointer' />
                            <MdOutlineFavoriteBorder className='text-xl cursor-pointer' />
                            {Array.isArray(select) && select.length > 0 ?
                                <div className="relative flex itrems-start  w-8 py-2 ">
                                    <FaBagShopping onClick={() => navigate('/cart')} className='text-xl cursor-pointer' />
                                    <div className=" text-xs px-1 bg-white absolute  right-0 top-0 rounded-full text-green ">{select.length}</div>
                                </div>
                                :
                                <FaBagShopping onClick={() => navigate('/cart')} className='text-xl  cursor-pointer' />
                            }
                            <LuLogOut onClick={()=> setLogin(false)} className='text-xl  cursor-pointer' />
                        </div> : 
                        <div onClick={()=> navigate('/login')} className="hidden md:block cursor-pointer text-white w-fit px-12 py-2 rounded-lg bg-primary">Login</div>
                        }



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

                            <div className="text-2xl text-gray font-bold w-full text-center">Other Links</div>
                            <ul className='w-full flex items-center gap-3 flex-col'>
                                <li onClick={()=> setLogin(false)} className='cursor-pointer hover:border-b font-bold'>Logout</li>
                            </ul>
                        </div>
                    }
                </div>

            </div>


        </div>
    )
}

export default Header