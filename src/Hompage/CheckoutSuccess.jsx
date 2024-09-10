import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import successimg from '../assets/images/pay.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { formatter } from '../assets/utils/functions'
import { useSelect } from '../context/SelectContext'
import ModalLayout from '../components/ModalLayout'
import { MdOutlineCancel } from 'react-icons/md'

const CheckoutSuccess = () => {

    const { select, setselect,subtotal,total } = useSelect()
    const [totalItems, setTotalItems] = useState()
    const [modal, setModal] = useState(false)
    const [quantity, setQuantity] = useState([])
   

    const checkTotalQuantity = (items) => {
        const quantities = select.reduce((acc, cur) => acc + cur.quantity, 0)
        setTotalItems(quantities)
    }
    const checkQuantities = (items) => {
        const quantities = select.map((item) => item.quantity)
        setQuantity(quantities)
    }

  
    useEffect(() => {
        checkTotalQuantity(select)
        checkQuantities(select)
    }, [select])

    return (
        <Layout>
            <div className={`w-full relative ${modal ? 'my-0' : 'my-10'}`}>
                && <div className="flex flex-col  items-center justify-center">
                    <img src={successimg} alt="" className='h-96' />
                    <div className="flex text-dark items-center flex-col  mt-5 gap-1">
                        <div className="font-bold text-[1.6rem]">Thank you for your purchase</div>
                        <div className="text-[1.2rem] font-medium">Your Order has been successfully processed</div>
                        <div className="text-[1.2rem] font-medium">Below are the details</div>
                    </div>

                    <div className="lg:w-2/4 mx-auto  w-11/12 my-5 bg-gray h-fit pb-5 rounded-md">
                        <div className="w-full h-fit py-4 bg-green rounded-t-md">
                            <div className="ml-10 font-bold text-xl">Order Summary</div>
                        </div>
                        <div className="mt-5 w-full text-dark">
                            <div className="flex items-start gap-5 flex-col">
                                <div className="flex items-center w-full justify-between px-10 ">
                                    <div className="font-bold">Order Number</div>
                                    <div className="">#5632436</div>
                                </div>
                                <div className="flex items-center w-full justify-between px-10 ">
                                    <div className="font-bold">Date</div>
                                    <div className="">July 17, 2024</div>
                                </div>
                                <div className="flex items-center w-full justify-between px-10 ">
                                    <div className="font-bold">Items Purchased</div>
                                    <div className="">{totalItems} Total items</div>
                                </div>
                                <div className="flex items-center bg-white w-full justify-between px-10 py-5">
                                    <div className="font-bold">Total</div>
                                    <div className="font-bold text-2xl">{formatter.format(total)}</div>
                                </div>
                                <div onClick={() => setModal(prev => !prev)} className="w-full px-3  ">
                                    <button className='text-center w-full bg-primary text-white py-3 px-3 rounded-full'
                                    >View order details</button>

                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="my-10 text-dark flex  items-start gap-3 w-11/12 lg:w-2/4 mx-auto justify-center flex-col">
                        <div className="font-bold text-2xl">Order Status:</div>
                        <div className="flex flex-col items-start gap-4">
                            <div className="">Your order is now complete and will be processed for shipment. You will receive a confirmation email shortly with tracking information once your items have been dispatched.</div>
                            <div className="flex flex-col items-start">
                                <div className="">Thank you for shopping with us! If you have any questions or concerns, please don't hesitate to contact our customer support team at</div>
                                <div className="text-green font-bold">Email: support@furniflex.com or</div>
                                <div className="text-green font-bold">Phone: No+2345678900</div>
                            </div>
                        </div>
                    </div>
                </div>
                {modal &&
                    <ModalLayout setModal={setModal} max={false}>
                        <div className=" rounded-md   mt-5 py-8 mx-auto lg:w-[90%] w-full cursor-pointer  bg-white  ">
                            <div className="w-11/12 h-[27rem] overflow-y-auto  mx-auto     bg-gray ">
                                <div className="w-full h-fit py-4 bg-green rounded-t-md">
                                    <div className="ml-10 font-bold text-xl ">Order Summary</div>
                                </div>
                                <div className="mt-5 w-full text-dark">
                                    <div className="flex items-start gap-5 flex-col">
                                        <div className="flex items-center w-full justify-between px-10 ">
                                            <div className="font-bold">Order Number</div>
                                            <div className="">#5632436</div>
                                        </div>
                                        <div className="flex items-center w-full justify-between px-10 ">
                                            <div className="font-bold">Date</div>
                                            <div className="">July 17, 2024</div>
                                        </div>
                                        <div className="flex items-center w-full justify-between px-10 ">
                                            <div className="font-bold">Items Purchased</div>
                                            <div className="">{select.length} Total items</div>
                                        </div>

                                    </div>
                                    <div className="text-center mt-10 mb-5 font-bold text-2xl">Item Details</div>


                                    <div className="relative overflow-x-auto w-11/12 mx-auto shadow-md sm:rounded-lg">
                                        <table class=" text-dark w-full mx-auto mb-10  text-sm text-left">
                                            <thead class="text-xs text-white text-gray-700 bg-green  capitalize ">
                                                <tr className='text-[1rem]'>
                                                    <th scope="col" class="w-fit px-4 ">
                                                        Image
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 ">
                                                        Product
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 ">
                                                        Price
                                                    </th>
                                                    <th scope="col" class="px-6   py-3">
                                                        Quantity
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Array.isArray(select) && select.length > 0 ? (
                                                    select.map((item, i) =>
                                                        <tr className="bg-gray border-white border-b text-[1rem] " key={`${i}`}>
                                                            <td className="w-fit py-3 px-6">
                                                                <img src={item.thumbnail} className="rounded-full  object-cover w-16 h-16" alt="" />
                                                            </td>
                                                            <th scope="row" className="px-2  py-2 text-gray-900">
                                                                <div className="ps-3">{item.title}</div>
                                                            </th>
                                                            <td className="px-6 py-2 ">
                                                                <div className="">{formatter.format(item.price)}</div>
                                                            </td>

                                                            <td className="px-8  py-2">
                                                                <div className="">{quantity[i]}</div>
                                                            </td>

                                                        </tr>

                                                    )
                                                ) : (
                                                    <tr>
                                                        <td className='mt-3 text-center'>No items in the cart.</td>
                                                    </tr>
                                                )}

                                            </tbody>

                                        </table>
                                    </div>


                                    <div className="flex flex-col items-start gap-4 mt-5">
                                        <div className="flex items-center bg-white rounded-lg w-1/2 mx-auto justify-between px-10 py-5">
                                            <div className="font-bold text-xl">Total</div>
                                            <div className="font-bold text-2xl">{formatter.format(total)}</div>
                                        </div>
                                        <div onClick={() => setModal(prev => !prev)} className="w-1/2 mx-auto px-3  ">
                                            <button className='text-center w-full bg-primary text-white py-3 px-3 rounded-full'
                                            >Close</button>

                                        </div>
                                    </div>



                                </div>


                            </div>
                        </div>
                    </ModalLayout>
                }
            </div>

        </Layout>
    )
}

export default CheckoutSuccess