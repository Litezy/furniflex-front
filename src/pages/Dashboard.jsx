import React from 'react'
import Layout from '../components/Layout'

const Dashboard = () => {
  return (
    <Layout dashboard={false}>
   <div className=" w-full  -mt-3.5 relative">
    <div className="w-full flex items-start h-screen relative">
      <div className="w-[25%] rounded-e-md h-full fixed  bg-[#2d5356]  top-[13.5%] left-0">
        <hr className='w-full'/>
      </div>
      <div className="w-[74%] rounded-s-md h-full  ml-auto"></div>
    </div>
   </div>
    </Layout>
  )
}

export default Dashboard