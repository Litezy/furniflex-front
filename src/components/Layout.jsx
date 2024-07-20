import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeadSub from './HeadSub'

const Layout = ({ children }) => {
    return (
        <div className='w-full h-screen '>
            <div className='w-full h-full  flex flex-col  items-center justify-between '>
                <div className=" w-full  ">
                    <Header/>
                </div>
                <div className=" w-full mt-24 h-fit ">
                    {children}
                    </div>
                <div className=" w-full">
                    <Footer/>
                </div>

            </div>
        </div>
    )
}

export default Layout