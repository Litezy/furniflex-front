import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import mastercard from '../assets/images/mastercard.png'
import visa from '../assets/images/visa.png'
import amex from '../assets/images/amex.png'
import { VscEyeClosed ,VscEye} from "react-icons/vsc";

const InputTag = ({ formtype = 'text', placeholder,name,value,onchange }) => {
    const [open,setOpen] = useState(false)
    const Icon = open ? VscEyeClosed: VscEye
    return (
        <div className='w-full'>
            {formtype === 'text' && <input type="text" className='w-full border-gray font-semibold  border-2 h-12 rounded-lg outline-none pl-2' value={value} name={name} onChange={onchange} placeholder={placeholder} />}
            {formtype === 'email' && <input type="email" value={value} name={name} onChange={onchange} className='w-full tracking-wide border-gray border-2 h-12 font-normal rounded-lg outline-none pl-2' placeholder={placeholder} />}
            {formtype === 'phone' && <input type="number" className='w-full border-gray border-2 h-12 rounded-lg outline-none pl-2' placeholder={placeholder} />}
            {formtype === 'country' &&
                <div className="border-gray border-2 h-12  rounded-lg pr-3 flex items-center justify-between">
                    <input type="number" className='w-full h-full outline-none pl-2 bg-transparent' placeholder={placeholder} />
                    <FaChevronDown className='cursor-pointer' />
                </div>
            }

         
         {formtype === 'password' &&
         <div className="w-full border-gray border-2 items-center h-12 rounded-lg flex">
            <input type={`${open ?'text':'password'}`} value={value} name={name} onChange={onchange}  className='outline-none h-full text-dark  font-normal tracking-normal px-2  bg-transparent w-[90%]' placeholder={placeholder} />
            <Icon className='cursor-pointer text-2xl text-dark ' onClick={()=> setOpen(!open)}/>
         </div>
         }
            {formtype === 'card' &&
                <div className="w-full border-gray border-2 h-12 px-2 rounded-lg flex">
                    <input type="text" className='outline-none h-full bg-transparent w-[70%]' />
                    <div className="flex items-center gap-1">
                        <img src={visa} alt="payment logo" className='h-10' />
                        <img src={mastercard} alt="payment logo" className='h-10' />
                        <img src={amex} alt="payment logo" className='h-10 ' />
                    </div>
                </div>
            }
        </div>
    )
}

export default InputTag