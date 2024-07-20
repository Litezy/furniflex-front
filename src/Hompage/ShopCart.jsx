import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { errorMessage, formatter, successMessage } from '../assets/utils/functions'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import image from '../assets/images/img.jpg'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelect } from '../context/SelectContext';
import { useNavigate } from 'react-router-dom';
import Hassle from '../components/Hassle';

const ShopCart = ({ }) => {

  const { select, setSelect } = useSelect()
  const [subtotal, setSubtotal] = useState([])
  const navigate = useNavigate()
  const [discountPrice, setDiscountPrice] = useState(2)
  const [coupon, setCoupon] = useState(false)
  const [total, setTotal] = useState(null)
  const [discount, setDiscount] = useState(false)
  let codes = [
    '224455', '224456', '224457', '224458', '224459', '00000', '11111'
  ]


  const [couponCode, setCouponCode] = useState({
    code: '',
  })
  const handleCode = (e) => {
    setCouponCode(
      {
        ...couponCode,
        [e.target.name]: e.target.value
      })
  }
  const checkCodes = () => {
    if (codes.includes(couponCode.code)) {
      setDiscount(true)
      successMessage(`The coupon with the code ${couponCode.code} is valid`)
    } else {
      setDiscount(false)
      errorMessage('code is not a valid coupon code')
      setTimeout(() => {
        setCoupon(false)
      }, 5000)
      setCouponCode({
        code: ''
      })
    }
  }

  const MinusProduct = (itemId) => {
    setSelect((prev) =>
      prev.map((item) =>
        item.id === itemId && item.quantity > 1 ?
          { ...item, quantity: item.quantity - 1 } :
          item
      )
    );

  }
  const IncreseProduct = (itemId) => {
    setSelect((prevSelect) =>
      prevSelect.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  }
  const deleteProduct = (itemId) => {
    setSelect((prevSelect) => prevSelect.filter((item) => item.id !== itemId));

  }
  let ship = 5
  const calculateSubtotal = (items) => {
    let total = 0;
    // Calculate total price based on each item's price and quantity
    items.forEach(item => {
      total += (item.price * item.quantity);
    });
    setSubtotal(total);
    
    let shippingAmount = Math.ceil((total / 100) * ship);

    if (discount) {
      let discountAmount = Math.ceil((total / 100) * discountPrice);
      setTotal(total - discountAmount + shippingAmount);
    } else {
      setTotal(total + shippingAmount);
    }
  }

  useEffect(() => {
    calculateSubtotal(select)
  }, [select,discount])


  // if (discount) {
  //   amt = Math.ceil((total / 100) * discountPrice)
  //   total = amt
  // } 


  return (
    <Layout>
      <div className="w-11/12 mx-auto h-full">
        <div className="w-full">
          <div className="w-fit mr-auto text-2xl font-bold text-primary">Product Details</div>
          <div className="flex items-start flex-col lg:flex-row gap-10 rounded-lg  pb-5 w-full">
            <div class="lg:w-[70%] w-full overflow-x-auto rounded-lg ">

              <table class=" text-dark w-full  text-sm text-left">
                <thead class="text-xs text-white text-gray-700 bg-green  capitalize ">
                  <tr className='text-[1rem]'>
                    <th scope="col" class="p-4 px-6">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 text-center py-3">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Subtotal
                    </th>
                    <th scope="col" class="px-3 py-3">

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(select) && select.length > 0 ? (
                    select.map((item, i) =>
                      <tr className="bg-gray border-white border-b text-[1rem]" key={`${i}`}>
                        <td className="w-4 p-3">
                          <img src={item.thumbnail} className="rounded-full object-cover w-16 h-16" alt="" />
                        </td>
                        <th scope="row" className="px-6 py-4 text-gray-900">
                          <div className="ps-3">{item.title}</div>
                        </th>
                        <td className="px-6 py-3">
                          <div className="">{formatter.format(item.price)}</div>
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex items-center w-full px-2 py-1 gap-3 justify-between rounded-full bg-white">
                            <div className="px-2 py-2 rounded-full bg-gray">
                              <FaMinus onClick={() => MinusProduct(item.id)} className="cursor-pointer text-md" />
                            </div>
                            <div className="quantity">{item.quantity}</div>
                            <div className="px-2 py-2 rounded-full bg-gray">
                              <FaPlus onClick={() => IncreseProduct(item.id)} className="cursor-pointer text-md" />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <div className="">{formatter.format(item.price * item.quantity)}</div>
                        </td>
                        <td className="px-6 py-3">
                          <div className="text-dark text-2xl cursor-pointer">
                            <MdOutlineCancel onClick={() => deleteProduct(item.id)} />
                          </div>
                        </td>
                      </tr>

                    )
                  ) : (
                    <tr>
                      <td>No items in the cart.</td>
                    </tr>
                  )}

                </tbody>

              </table>
            </div>

            <div className="lg:w-[30%] w-full rounded-lg bg-green ">
              <table class=" w-full h-full text-dark text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-white text-gray-700  ">
                  <tr className='text-[1rem]'>
                    <th scope="col" class="px-6 py-4">
                      Order Summary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray  ">
                    <td class=" py-5 text-[1.1rem] w-full">
                      <div className="flex items-start gap-5 flex-col">
                        <div className="flex items-center w-full justify-between px-10 ">
                          <div className="font-bold">Subtotal</div>
                          <div className="">{formatter.format(subtotal)}</div>
                        </div>
                        <div className="flex items-center w-full justify-between px-10 ">
                          <div className="font-bold">Shipping</div>
                          <div className="">{ship}%</div>
                        </div>



                        {coupon ? <div className="w-full px-10 flex flex-col gap-2 items-start justify-between">
                          <div className="flex w-full gap-2 items-center justify-between">
                            <input name='code' placeholder='enter code' value={couponCode.code} onChange={handleCode} type="text" className='pl-2 outline-none h-10 rounded-lg w-[70%]' />
                            <button onClick={checkCodes} className='w-fit px-5 py-2 rounded-lg bg-primary text-white'>enter</button>
                          </div>
                          {discount &&
                            <div className="flex w-full gap-2 items-center justify-between">
                              <div className="flex">Coupon discount</div>
                              <div className="flex">{discountPrice}%</div>
                            </div>

                          }
                        </div> :
                          <div className="flex items-center w-fit gap-2 px-10 text-primary">
                            <div onClick={() => setCoupon(true)} className="font-bold cursor-pointer ">Add coupon code</div>
                            <IoIosArrowRoundForward className='text-2xl' />
                          </div>
                        }



                        <div className="flex items-center bg-white w-full justify-between px-10 py-5">
                          <div className="font-bold">{discount ? 'Discounted Total':'Total'}</div>
                          <div className="font-bold text-2xl">{formatter.format(total)}</div>
                        </div>
                        <div className="w-11/12 mx-auto ">
                          <button onClick={() => navigate(`/cart/billing`)} className='text-center w-full bg-primary text-white py-3 rounded-full'>Proceed to checkput</button>
                        </div>
                      </div>

                    </td>
                  </tr>

                </tbody>
              </table>

            </div>
          </div>


        </div>
        <div className="my-5">
          <Hassle />
        </div>
      </div>

    </Layout>
  )
}

export default ShopCart