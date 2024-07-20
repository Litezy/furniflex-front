import React, { useState } from 'react'
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { IoIosRadioButtonOff } from "react-icons/io";
import InputTag from './InputTag';
import { FaCheck } from 'react-icons/fa6';
import { ImCheckboxChecked } from "react-icons/im";

const Payout = ({ ...props }) => {



    const methods = ['Pay with Credit Card', 'Pay with Paypal', 'Use Gift Card']
    
    const [active, setActive] = useState(methods[0])


    const selectMethod = (m) => {
        setActive(m)
    }
    return (
        <div className='w-full my-5 text-dark ' {...props}>
            <div className=" text-3xl font-medium mb-3">How would you like to pay?</div>
            {methods.map((m, i) => {
                return (
                    <div onClick={() => selectMethod(m)} className="flex items-center gap-2 mb-1 cursor-pointer">
                        {active === m ? <IoRadioButtonOnOutline className='text-primary' /> : <IoIosRadioButtonOff />}
                        <div className="flex flex-col">{m}</div>
                    </div>

                )
            })}

            <div className="my-5 flex  items-start flex-col md:flex-row justify-between gap-10">

                <div className="flex  items-start gap-5 flex-col md:w-1/2 w-full">
                    <div className="flex items-start gap-1 flex-col w-full ">
                        <div className="flex items-center w-full justify-between">
                            <div className="font-bold">Name on card</div>
                            <FaCheck className=" text-[#ff5b5b] font-light" />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <InputTag formtype='text' placeholder={`John Doe`} />

                        </div>
                    </div>
                    <div className="flex items-start gap-1 flex-col w-full ">
                        <div className="flex items-center w-full justify-between">
                            <div className="font-bold">Expiration</div>
                            <FaCheck className=" text-[#ff5b5b] font-light" />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <InputTag formtype='text' placeholder={`06/25`} />

                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-5 flex-col w-full md:w-1/2">
                
                <div className="flex items-start gap-1 flex-col w-full ">
                        <div className="flex items-center w-full justify-between">
                            <div className="font-bold">Card No.</div>
                            <FaCheck className=" text-[#ff5b5b] font-light" />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <InputTag formtype='card' placeholder={``} />

                        </div>
                    </div>
                    <div className="flex items-start gap-1 flex-col w-full ">
                        <div className="flex items-center w-full justify-between">
                            <div className="font-bold">CVV</div>
                            <FaCheck className=" text-[#ff5b5b] font-light" />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <InputTag formtype='phone' placeholder={`.....`} />

                        </div>
                    </div></div>
            </div>

            <div className="flex items-start gap-2 flex-col">
                <div className="flex items-center gap-2 cursor-pointer">
                      <ImCheckboxChecked className='text-primary'/>
                      <div className="">Use shipping address as billing adress</div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                      <ImCheckboxChecked className='text-[#616161]'/>
                      <div className="">I accept Byredo Terms & Conditions</div>
                </div>
            </div>

        </div>
    )
}

export default Payout