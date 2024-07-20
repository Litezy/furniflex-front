import React, { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import blogimg1 from '../assets/images/splash1.jpg';
import blogimg2 from '../assets/images/splash2.avif';
import blogimg3 from '../assets/images/splash3.avif';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { MdOutlineMail } from "react-icons/md";


const BlogsAndFaqs = () => {
    const blogs = [
        {
            title: 'First time make-up owners',
            img: blogimg1,
            author: 'Kristin Watson',
            date: 'April 19, 24'
        },
        {
            title: 'How to keep your make-up clean',
            img: blogimg2,
            author: 'Robert Fox',
            date: 'April 20, 24'
        },
        {
            title: 'Small space for make-ups',
            img: blogimg3,
            author: 'Kristin Watson',
            date: 'Dec 20, 24'
        },
    ];

    const FAQS = [
        {
            ques: 'What are the essential makeup products for a beginner?',
            ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eius voluptatibus dicta hic sapiente sint eligendi officia explicabo reiciendis laboriosam.'
        },
        {
            ques: 'How do you choose the right foundation shade?',
            ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eius voluptatibus dicta hic sapiente sint eligendi officia explicabo reiciendis laboriosam.'
        },
        {
            ques: 'What is the best way to apply foundation?',
            ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eius voluptatibus dicta hic sapiente sint eligendi officia explicabo reiciendis laboriosam.'
        },
        {
            ques: 'How can you make your makeup last all day?',
            ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eius voluptatibus dicta hic sapiente sint eligendi officia explicabo reiciendis laboriosam.'
        },
        {
            ques: 'What are some tips for achieving a natural makeup look?',
            ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eius voluptatibus dicta hic sapiente sint eligendi officia explicabo reiciendis laboriosam.'
        },
    ];

    const [active, setActive] = useState(null);
    const [icon, setIcon] = useState(false);

    const selectAns = (i) => {
        setActive(active === i ? null : i);
    };


  

    return (
        <div className='w-11/12 mx-auto mb-10 text-dark'>
            <div className="flex w-full items-center justify-between">
                <div className="lg:text-3xl font-bold capitalize w-1/2">Explore our latest blog</div>
                <div className="flex items-center gap-6">
                    <div className="px-5 rounded-full bg-primary text-white cursor-pointer py-2 flex items-center">
                        <div className="text-sm lg:text-lg ">View All Posts</div>
                        <IoIosArrowRoundForward className="md:text-3xl text-xl " />
                    </div>
                </div>
            </div>
            <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                    <div className="w-full flex flex-col items-start gap-2 cursor-pointer" key={index}>
                        <img src={blog.img} className='w-full rounded-xl h-52 bg-cover' alt="" />
                        <div className="font-bold text-xl">{blog.title}</div>
                        <div className="">
                            <span className='text-sm text-zinc-400'> by</span>
                            <span className='text-dark font-semibold'> {blog.author}
                                <span className='text-sm text-zinc-400'> on</span>
                                <span className='font-bold text-primary'> {blog.date}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-20 w-full">
                <div className="font-bold text-3xl lg:w-[25%] mx-auto text-center">Got Questions? We've Got answers</div>

                <div className="mt-10 w-full">
                    {FAQS.map((item, i) => {

                        return (
                            <div onClick={() => selectAns(i)} className={`cursor-pointer ${active === i ? 'h-fit py-2 bg-green text-white transition-all duration-300' : 'transition-all duration-300 h-fit py-2 bg-gray'} w-full lg:px-5 px-2 mb-3 rounded-xl gap-5  lg:py-5`} key={i}>
                                <div className="flex items-center w-full justify-between">
                                    <div className="font-bold text-lg lg:text-xl">{item.ques}</div>
                                    <div className="">
                                         {/* <FaMinus className='lg:text-2xl font-bold text-lg cursor-pointer' />  */}
                                         <FaPlus className={` ${active === i &&'text-white rotate-45 transition-all delay-100 ease-in-out'} lg:text-2xl text-lg font-bold cursor-pointer`} />
                                    </div>
                                </div>
                                {active === i && <div className="p1-2 mt-2">{item.ans}</div>}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className=" w-full ">
                <div className="bg-gray w-full h-fit py-5 flex items-center justify-center rounded-xl">
                    <div className="w-11/12 mx-auto flex items-center flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                        <div className="flex items-start flex-col gap-4 order-2">
                            <div className=" capitalize font-bold text-xl lg:text-3xl lg:w-[60%]">Subscribe to our newsletter</div>
                            <div className="font-semibold w-[80%]">Subscribe to our newsletter today to receive update on the latest news</div>
                            <div className="h-fit py-1 px-2 lg:w-[90%] w-full rounded-full bg-white flex items-center gap-5">
                                <div className=" px-1 py-1 rounded-full bg-grey">
                                    <MdOutlineMail className=' text-dark text-xl ' />
                                </div>
                                <input type="email" placeholder='Enter your email ' className='h-full w-[70%] outline-none' />
                                <button className='text-white bg-primary lg:px-2 px-5 py-2 rounded-full'>subscribe</button>
                            </div>
                        </div>

                        <div className=" lg:order-2 order-1 rounded-xl">
                            <img src={blogimg1} alt="image" className='w-full lg:h-[50dvh] object-cover rounded-xl'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogsAndFaqs;
