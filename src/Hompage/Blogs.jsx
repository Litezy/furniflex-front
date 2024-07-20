import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { errorMessage, formatter } from '../assets/utils/functions'
import { BsFillCartDashFill } from 'react-icons/bs'
import { MdOutlineFavorite } from 'react-icons/md'
import blogimg1 from '../assets/images/splash1.jpg';
import blogimg2 from '../assets/images/splash2.avif';
import blogimg3 from '../assets/images/splash3.avif';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaFacebook, FaPinterest } from "react-icons/fa6";
import Hassle from '../components/Hassle'


const Blogs = () => {

    const Icons = [
        { img: <FaInstagram /> }, { img: <FaFacebook /> }, { img: <FaXTwitter /> }, { img: <FaPinterest /> }
    ]
    const [loading, setLoading] = useState(false)
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
        {
            title: 'Small space for make-ups',
            img: blogimg3,
            author: 'Kristin Watson',
            date: 'Dec 20, 24'
        },
        {
            title: 'Small space for make-ups',
            img: blogimg3,
            author: 'Kristin Watson',
            date: 'Dec 20, 24'
        },
        {
            title: 'Small space for make-ups',
            img: blogimg3,
            author: 'Kristin Watson',
            date: 'Dec 20, 24'
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
        {
            title: 'Small space for make-ups',
            img: blogimg3,
            author: 'Kristin Watson',
            date: 'Dec 20, 24'
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
        {
            title: 'How to keep your make-up clean',
            img: blogimg2,
            author: 'Robert Fox',
            date: 'April 20, 24'
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


    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 9;
    let lastIndex = currentPage * recordsPerPage;
    let firstIndex = lastIndex - recordsPerPage;
    const records = blogs.slice(firstIndex, lastIndex)
    const npage = Math.ceil(blogs.length / recordsPerPage)
    const numbers = Array.from({ length: npage }, (_, i) => i + 1);

    // console.log(blogs.length)

    if (records.length === 0) {
        firstIndex = 0
    }
    if (firstIndex === 0) {
        firstIndex = 1
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const changeCurrentPage = (id, e) => {
        e.preventDefault()
        setCurrentPage(id)
    }
    // const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=Maybelline&name=Maybelline%20Face%20Studio%20Master%20Hi-Light%20Booster%20Bronzer%E2%80%99'
    // const fetchBlogs = useCallback(
    //     async () => {
    //         setLoading(true)
    //         try {
    //             const res = await fetch(URL)
    //             const data = await res.json()
    //             // console.log(data)
    //             // setBlogs(data)
    //         } catch (error) {
    //             console.log(error)
    //             errorMessage(`Something went wrong:`, error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    // )

    // useEffect(() => {
    //     fetchBlogs()
    // }, [])


    return (
        <Layout>
            <div className="w-full ">
                <div className="w-11/12 mx-auto my-5">
                    <div className="flex items-start gap-5 text-dark flex-col md:w-3/4">
                        <div className="font-bold text-4xl capitalize">About our blog</div>
                        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem aspernatur quas tenetur nobis culpa dolorum neque illum voluptatem, cumque suscipit, atque eveniet excepturi aperiam blanditiis mollitia ut quibusdam! Magnam itaque impedit reiciendis incidunt tempore alias sit debitis. Culpa corrupti modi voluptatibus excepturi ut illum rerum repellendus facere labore. Rerum!</div>
                    </div>

                    <div className="w-full grid  my-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {records.map((blog, index) => (
                            <div className="w-full flex flex-col items-start gap-2 cursor-pointer" key={index}>
                                <img src={blog.img} className='w-full rounded-xl h-52 bg-cover' alt="" />
                                <div className="font-bold text-xl text-dark">{blog.title}</div>
                                <div className="-mt-2">
                                    <span className='text-sm text-zinc-400'> by</span>
                                    <span className='text-dark font-semibold'> {blog.author}
                                        <span className='text-sm text-zinc-400'> on</span>
                                        <span className='font-bold text-primary'> {blog.date}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-fit text-dark ml-auto flex items-center gap-5">
                        <div onClick={prevPage} className=" cursor-pointer flex items-center gap-2 w-fit px-3 py-1 rounded-full border-dark border">
                            <FaLongArrowAltLeft />
                            <div className="">Previous</div>
                        </div>
                        {numbers.map((n, i) => (
                            <div className={``} key={i}>
                                <a onClick={(e) => changeCurrentPage(n, e)} href="#"
                                    className={`flex items-center  justify-center px-2 py-1 leading-tight text-xs rounded-full
                      ${currentPage === n ? 'bg-green text-white' : 'text-dark border'}`}>{n}</a>
                            </div>
                        ))}

                        <div onClick={nextPage} className=" cursor-pointer flex items-center gap-2 w-fit px-3 py-1 rounded-full border-dark border">
                            <div className="">Next</div>
                            <FaLongArrowAltRight />
                        </div>

                    </div>
                    <div className="my-16 flex items-start h-96 py-2 text-white gap-10 justify-between">
                        <div className="bg-green flex-col rounded-lg w-1/2 py-10 px-5 flex items-start justify-between h-full">
                            <div className="flex items-start gap-2 flex-col ">
                                <div className="font-bold text-3xl">Join Our Community</div>
                                <div className="">We invite you to join our growing community of design enthusiasts, DIY lovers, and cosmetics improvement aficionados. Subscribe to our newsletter to get the latest blog posts delivered straight to you inbox, and follow us on social media for daily inspirations and updates</div>
                            </div>
                            <div className="flex items-center gap-2">
                                {Icons.map((item, i) => (
                                    <div className="text-white text-lg px-2 py-2 cursor-pointer  rounded-full bg-[#426467]" key={i}>{item.img}</div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray flex-col rounded-lg text-dark  w-1/2 py-10 px-5 flex items-start justify-between h-full">
                            <div className="flex items-start gap-2 flex-col ">
                                <div className="font-bold text-3xl ">Share Your Story</div>
                                <div className="">Have a cosmetics transformation success story to share? We'd love to featureyou on your blog! Submit your stories and photos to</div>
                                <div className="text-primary font-bold ">Email: contact@furniflex.com</div>
                            </div>
                            <div className=""><span className='text-green font-bold text-xl'>Thank you</span> for visiting the Cosmetics Emporium Blog. We're excited to be part of your journey in creating beautiful, comfortable, and stylish skin</div>
                        </div>
                    </div>
                    <Hassle/>
                </div>
            
            </div>
        </Layout>
    )
}

export default Blogs