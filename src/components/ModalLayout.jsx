import React, { useEffect, useRef } from 'react'

const ModalLayout = ({ children ,setModal,max=true,w,...props}) => {

  const togref = useRef(null)
  useEffect(() => {
    if (togref) {
      window.addEventListener('click', e => togref.current !== null &&
         !togref.current.contains(e.target) && setModal(false) , true)
    }
  }, [])
  return (
    <div className='fixed top-0 left-0 w-screen h-screen overflow-y-auto overflow-x-hidden py-20 bg-[#344054B2] backdrop-blur-sm z-30 '>

    <div className={`${max ? 'w-11/12' : 'w-10/12 lg:w-2/4' } h-fit mx-auto`}>
      <div className={`  relative   w-full`} ref={togref}>
        {children}
      </div>
    </div>
  </div>
  )
}

export default ModalLayout