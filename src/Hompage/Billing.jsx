import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useSelect } from '../context/SelectContext'
import { formatter } from '../assets/utils/functions'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaCheck } from "react-icons/fa";
import countries from '../assets/utils/countries.json'
import InputTag from '../components/InputTag'
import { FaChevronDown } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Payout from '../components/Payout'
import Hassle from '../components/Hassle'
import { useNavigate } from 'react-router-dom'

const Billing = () => {
  const { ship, login, select, setSelect, subtotal, total, discount, setDiscount, discountPrice, setDiscountPrice } = useSelect()

  const [selectcountry, setSelectCountry] = useState({})
  const navigate = useNavigate()
  const [openCountries, setOpenCountries] = useState(false)
  const [opendialogue, setOpendialogue] = useState(false)


  const selectOneCountry = (index) => {
    setSelectCountry(prev => {
      const select = countries.filter((item) => item.code === index)
      prev = select
      return prev
    })

  }


  const MakePayment = () => {
    if (login === false) {
      setOpendialogue(true)
    } else {
      navigate(`/cart/billing/checkout`)
    }

  }
  return (
    <Layout>
      <div className="w-full">
        <div className={`w-11/12 mx-auto relative }`}>
          {opendialogue &&
            <div className="w-fit px-10 fixed  bg-green h-fit py-5 -translate-x-1/2 top-60 left-1/2 flex items-center justify-center rounded-lg ">
           <div className="">
           <div className="">Kindly login to proceed with payment</div>
           <div className="my-3">Login Now?</div>
           <div className="flex items-center gap-5 w-full justify-center">
            <button onClick={()=> navigate(`/login`)} className='w-1/2  py-1 rounded-xl bg-primary'>Yes</button>
            <button onClick={()=> setOpendialogue(false)} className='w-1/2  py-1 rounded-xl bg-red-500'>No</button>
           </div>
           </div>
            </div>


          }

          <div className="flex w-full items-center justify-between text-dark">
            <div className=" font-extrabold text-2xl ">Billing Details</div>
            <div className="flex items-center gap-2">
              <div className="">Required fields are marked as:</div>
              <FaCheck className='text-xl text-[#ff5b5b] font-bold' />
            </div>
          </div>
          <div className="flex items-start flex-col lg:flex-row gap-10 w-full mt-5">
            <div className="lg:w-[70%] w-full text-dark h-fit pb-5">
              <form className='w-full flex items-start flex-col gap-8'>
                <div className="flex w-full items-start flex-col md:flex-row gap-10 justify-between">
                  <div className="flex items-start w-full gap-5 flex-col md:w-1/2">
                    <div className="flex items-start gap-1 flex-col w-full">
                      <div className="flex items-center w-full justify-between">
                        <div className="font-bold">First Name</div>
                        <FaCheck className=" text-[#ff5b5b] font-light" />
                      </div>
                      <InputTag placeholder={`John`} />
                    </div>
                    <div className="flex items-start gap-1 flex-col w-full">
                      <div className="flex items-center w-full justify-between">
                        <div className="font-bold">Phone Number</div>
                        <FaCheck className=" text-[#ff5b5b] font-light" />
                      </div>
                      <div className="h-12 rounded-md pl-3  flex items-center gap-2 bg-gray w-full">
                        <div className="w-fit h-fit o">
                          {Array.isArray(selectcountry) ? selectcountry.map((country, i) => {
                            return (
                              <div key={i} onClick={() => setOpenCountries(prev => !prev)} className="a flex items-center gap-2 cursor-pointer  w-full">
                                <img src={`https://flagcdn.com/${country.code.toLocaleLowerCase()}.svg`} className='rounded-sm w-10 h-8 object-cover' alt={country.code} />
                                <div className="flex items-center  gap-2 border-r-2 px-2  w-20 border-[#e3e3e3]">
                                  <div className="">{country.dial_code}</div>
                                  <FaChevronDown />
                                </div>
                              </div>)
                          }) :
                            <div className="w-full">
                              {countries.slice(0, 1).map((country, i) => {
                                return (
                                  <div key={i}
                                    onMouseOver={() => selectOneCountry(country.code)}
                                    // onClick={() => setOpenCountries(false)}
                                    className=" flex items-center gap-5 cursor-pointer mb-3   w-full">
                                    <img src={`https://flagcdn.com/${country.code.toLocaleLowerCase()}.svg`} className='rounded-sm w-8 h-6 object-cover' alt={country.code} />
                                    <div className="">{country.dial_code}</div>
                                  </div>)
                              })}
                            </div>
                          }
                        </div>
                        <div className="w-[70%] flex items-center justify-between h-3/4  pr-3">
                          <input type="number" className='w-[90%] h-full pl-2 bg-transparent outline-none' />
                          <FaCheckCircle className='text-primary' />
                        </div>

                      </div>
                      {openCountries && <div className="w-fit h-48  rounded-md px-5 py-1 overflow-auto bg-green text-white">

                        {Array.isArray(countries) && countries.map((country, i) => {
                          return (
                            <div key={i}
                              onMouseOver={() => selectOneCountry(country.code)}
                              onClick={() => setOpenCountries(false)}
                              className=" flex items-center gap-5 cursor-pointer mb-3   w-full">
                              <img src={`https://flagcdn.com/${country.code.toLocaleLowerCase()}.svg`} className='rounded-sm w-8 h-6 object-cover' alt={country.code} />
                              <div className="">{country.name}</div>
                              <div className="">{country.dial_code}</div>
                            </div>)
                        })}
                      </div>}
                    </div>
                  </div>

                  <div className="flex items-start  gap-5 w-full flex-col md:w-1/2">
                    <div className="flex items-start gap-1 flex-col w-full">
                      <div className="flex items-center w-full justify-between">
                        <div className="font-bold">Last Name</div>
                        <FaCheck className=" text-[#ff5b5b] font-light" />
                      </div>
                      <InputTag placeholder={`Doe`} />
                    </div>
                    <div className="flex items-start gap-1 flex-col w-full">
                      <div className="flex items-center w-full justify-between">
                        <div className="font-bold">Email Address</div>
                        <FaCheck className=" text-[#ff5b5b] font-light" />
                      </div>
                      <InputTag formtype='email' placeholder={`Johndoe@gmail.com`} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-1 flex-col w-full">
                  <div className="flex items-center w-full justify-between">
                    <div className="font-bold">Company Name (Optional)</div>
                    <FaCheck className=" text-[#ff5b5b] font-light" />
                  </div>
                  <InputTag placeholder={`Company Name`} />
                </div>

                <div className="flex items-start gap-1 flex-col w-full">
                  <div className="flex items-center w-full justify-between">
                    <div className="font-bold">Country</div>
                    <FaCheck className=" text-[#ff5b5b] font-light" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <InputTag formtype='country' placeholder={`Country`} />

                  </div>
                </div>


                <div className="flex w-full items-center flex-col md:flex-row gap-10 justify-between">
                  <div className="flex items-start gap-1 flex-col w-full">
                    <div className="flex items-center w-full justify-between">
                      <div className="font-bold">City</div>
                      <FaCheck className=" text-[#ff5b5b] font-light" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <InputTag formtype='country' placeholder={`New Jersey`} />

                    </div>
                  </div>
                  <div className="flex items-start gap-1 flex-col w-full">
                    <div className="flex items-center w-full justify-between">
                      <div className="font-bold">Address</div>
                      <FaCheck className=" text-[#ff5b5b] font-light" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <InputTag formtype='text' placeholder={`2624 Royal Ln.Mesa`} />

                    </div>
                  </div>
                  <div className="flex items-start gap-1 flex-col w-full">
                    <div className="flex items-center w-full justify-between">
                      <div className="font-bold">Zip Code</div>
                      <FaCheck className=" text-[#ff5b5b] font-light" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <InputTag formtype='phone' placeholder={`347690`} />

                    </div>
                  </div>
                </div>
                <Payout />
              </form>

            </div>




            <div className="lg:w-[30%] w-full bg-gray h-fit pb-5 rounded-md">
              <div className="w-full h-fit py-4 bg-green rounded-t-md">
                <div className="ml-10 font-bold text-xl">Order Summary</div>
              </div>
              <div className="mt-5 w-full text-dark">
                <div className="flex items-start gap-5 flex-col">
                  <div className="flex items-center w-full justify-between px-10 ">
                    <div className="font-bold">Subtotal</div>
                    <div className="">{formatter.format(subtotal)}</div>
                  </div>
                  <div className="flex items-center w-full justify-between px-10 ">
                    <div className="font-bold">Shipping</div>
                    <div className="">{ship}%</div>
                  </div>
                  {discount ? <div className="flex items-center w-full justify-between px-10 text-primary">
                    <div className="font-bold ">Coupon discount</div>
                    <div className="text-dark font-bold">{discountPrice}%</div>
                  </div> :
                    <div className=""></div>
                  }
                  <div className="flex items-center bg-white w-full justify-between px-10 py-5">
                    <div className="font-bold">Total Amount</div>
                    <div className="font-bold text-2xl">{formatter.format(total)}</div>
                  </div>
                  <div className="w-full px-3 flex items-center justify-between ">
                    <button onClick={MakePayment} className='text-center  bg-primary text-white py-2 px-5 rounded-full'
                    >Proceed to pay</button>
                    <button className='text-white bg-[#616161] py-2 px-5 rounded-full'>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 w-full">
            <Hassle />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Billing