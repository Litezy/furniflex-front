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
  const { select, setSelect } = useSelect()
  const [subtotal, setSubtotal] = useState([])
  const [selectcountry, setSelectCountry] = useState({})
  const navigate = useNavigate()
  const [openCountries, setOpenCountries] = useState(false)
  const calculateSubtotal = (items) => {
    let total = 0;
    // Calculate total price based on each item's price and quantity
    items.forEach(item => {
      total += (item.price * item.quantity);
    });

    // Update the state with the calculated total
    setSubtotal(total);
  }

  useEffect(() => {
    calculateSubtotal(select)
  }, [select])

  let ship = 5
  let amount = Math.ceil((subtotal / 100) * 5)
  let total = subtotal + amount

  const selectOneCountry = (index) => {
    setSelectCountry(prev => {
      const select = countries.filter((item) => item.code === index)
      prev = select
      return prev
    })

  }
  return (
    <Layout>
      <div className="w-full">
        <div className="w-11/12 mx-auto">
          <div className="flex w-full items-center justify-between text-dark">
            <div className=" font-extrabold text-2xl ">Billing Details</div>
            <div className="flex items-center gap-2">
              <div className="">Required fields are marked as:</div>
              <FaCheck className='text-xl text-[#ff5b5b] font-bold' />
            </div>
          </div>
          <div className="flex items-start flex-col md:flex-row gap-10 w-full mt-5">
            <div className="md:w-[70%] w-full text-dark h-fit pb-5">
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




            <div className="md:w-[30%] w-full bg-gray h-fit pb-5 rounded-md">
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
                  <div className="flex items-center w-fit gap-2 px-10 text-primary">
                    <div className="font-bold ">Add coupon code</div>
                    <IoIosArrowRoundForward className='text-2xl' />
                  </div>
                  <div className="flex items-center bg-white w-full justify-between px-10 py-5">
                    <div className="font-bold">Total</div>
                    <div className="font-bold text-2xl">{formatter.format(total)}</div>
                  </div>
                  <div className="w-full px-3 flex items-center justify-between ">
                    <button onClick={()=> navigate(`/cart/billing/checkout`)} className='text-center  bg-primary text-white py-2 px-3 rounded-full'
                    >Proceed to checkput</button>
                    <button className='text-white bg-[#616161] py-2 px-3 rounded-full'>Cancel</button>
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