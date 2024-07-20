import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoChevronUp } from "react-icons/io5";
import { avail, categories, colors, formatter, martial, successMessage } from '../assets/utils/functions';
import { MdOutlineFavorite } from 'react-icons/md';
import { BsFillCartDashFill } from 'react-icons/bs';
import { Range } from 'react-range';
import Loading from '../components/Loading';
import { useSelect } from '../context/SelectContext';
import Hassle from '../components/Hassle';


const Products = ({ }) => {
  const [active, setActive] = useState('')
  const [mart, setMart] = useState('')
  const [color, setColor] = useState('')
  const [aval, setAval] = useState('')
  const [opencat, setOpenCat] = useState(false)
  const [openmat, setOpenMat] = useState(false)
  const [opencolors, setOpenColors] = useState(false)
  const [openavail, setOpenAvail] = useState(false)
  const [openprice, setOpenPrice] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const Icon1 = opencat ? FaChevronUp : FaChevronDown
  const Icon2 = openprice ? FaChevronUp : FaChevronDown
  const Icon3 = openmat ? FaChevronUp : FaChevronDown
  const Icon4 = opencolors ? FaChevronUp : FaChevronDown
  const Icon5 = openavail ? FaChevronUp : FaChevronDown


  const selectItem = (name) => {
    setActive(name)
  }
  const selectItemMartial = (name) => {
    setMart(name)
  }
  const selectColor = (name) => {
    setColor(name)
  }
  const selectAvail = (name) => {
    setAval(name)
  }

  const fetchItems = useCallback(
    async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json()
        setData(data.products);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
  )

  useEffect(() => {
    fetchItems();
  }, []);

  const MIN = 0;
  const MAX = 100;

  // Component state for min and max prices
  const [rangeValues, setRangeValues] = useState([MIN, MAX]);

  // Handle range change
  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  const filterItems = () => {
    return data.filter(item => item.price >= rangeValues[0] && item.price <= rangeValues[1]);
  }



  const filteredData = filterItems()
  const [itemsfilter, setItemsfilter] = useState({})
  const { select, setSelect } = useSelect()
  const selectProduct = (i) => {
    setItemsfilter(prev => {
      const select = filteredData.filter((item) => item.id === i)
      prev = select
      return select
    })
  }
  const AddItems = () => {
    setSelect((prevSelect) => {
      const itemsToAdd = itemsfilter[0]
      const itemIndex = prevSelect.findIndex((item) => item.id === itemsToAdd.id)
      if (itemIndex > -1) {
        successMessage('item already selected')
        return prevSelect
      } else {
        return [...prevSelect, { ...itemsToAdd, quantity: 1 }]
      }
    })
  }

  return (
    <Layout>
      <div className="my-10 w-full h-full">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row items-start gap-5">
          <div className="lg:w-[25%] md:w-[40%] w-full  text-dark ">
            <div className="font-bold text-2xl">Filter Options</div>
            <div className={`mt-3 w-full rounded-xl  border-2 border-gray  py-5 px-3`}>
              <div className="w-full flex items-center justify-between mb-5">
                <div className="font-bold text-xl">Category</div>
                <Icon1 onClick={() => setOpenCat(prev => !prev)} className='text-xl cursor-pointer' />
              </div>
              <div className={`${opencat ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}  overflow-hidden transition-all duration-500 ease-in-out`}>
                {categories.map((item, i) => {
                  return (
                    <div onClick={() => selectItem(i)} className={`cursor-pointer flex items-center gap-2 mb-3 ${active === i ? 'bg-gray' : ''} border-[#f6f6f6] border w-fit px-5 py-2 rounded-full `} key={i}>
                      {active === i ? <div className="w-4 h-4 rounded-full bg-white border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div> :

                        <div className="w-3 h-3 rounded-full bg-white border border-dark"></div>}

                      <div className={`${active === i ? 'text-primary' : ''} font-bold`}>{item}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-3 w-full rounded-xl h-fit border-2 bg-gray border-gray py-5 px-3">
              <div className="w-full flex items-center justify-between mb-5">
                <div className="font-bold text-xl">Price</div>
                <Icon2 onClick={() => setOpenPrice(prev => !prev)} className='text-xl cursor-pointer' />
              </div>
              <div className={`${openprice ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'} overflow-hidden transition-all duration-500 ease-in-out`}>
                <div className="flex w-full justify-between items-center">
                  <div className="text-sm">min: {formatter.format(rangeValues[0])}</div>
                  <div className="text-sm">max: {formatter.format(rangeValues[1])}</div>
                </div>
                <div className="relative w-11/12 mx-auto h-10 mt-4">
                  <Range
                    values={rangeValues}
                    step={1}
                    min={MIN}
                    max={MAX}
                    onChange={handleRangeChange}
                    renderTrack={({ props, children, isDragged }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '10px',
                          background: 'white',
                          borderRadius: '3px',
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            height: '100%',
                            background: '#517173', // Color between the two handles
                            borderRadius: 'inherit',
                            left: `${(rangeValues[0] - MIN) / (MAX - MIN) * 100}%`,
                            width: `${(rangeValues[1] - rangeValues[0]) / (MAX - MIN) * 100}%`
                          }}
                        />
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '20px',
                          width: '20px',
                          backgroundColor: '#517173',
                          borderRadius: '50%',
                          outline: 'none'
                        }}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="w-fit ml-auto px-5 my-1 bg-green rounded-full">
                <button onClick={filterItems} className=' text-white'>filter</button>
              </div>
            </div>

            <div className="mt-3 w-full rounded-xl h-fit border-2 border-gray py-5 px-3">
              <div className="w-full flex items-center justify-between mb-5">
                <div className="font-bold text-xl">Martial</div>
                <Icon3 onClick={() => setOpenMat(prev => !prev)} className='text-xl cursor-pointer' />
              </div>

              <div className={`grid lg:grid-cols-2 ${openmat ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}  overflow-hidden transition-all duration-500 ease-in-out`}>
                {martial.map((item, i) => {
                  return (
                    <div onClick={() => selectItemMartial(i)} className={` cursor-pointer flex items-center gap-2 mb-3 ${mart === i ? 'bg-gray text-primary' : ''} border-[#f6f6f6] border w-fit px-5 py-2 rounded-full `} key={i}>
                      <div className={`${mart === i ? '' : ''} font-bold`}>{item}</div>
                    </div>
                  )
                })}
              </div>
            </div>


            <div className="mt-3 w-full rounded-xl h-fit border-2 border-gray  py-5 px-3">
              <div className="w-full flex items-center justify-between mb-5">
                <div className="font-bold text-xl">Colors</div>
                <Icon4 onClick={() => setOpenColors(prev => !prev)} className='text-xl cursor-pointer' />
              </div>
              <div className={`${opencolors ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'} overflow-hidden transition-all duration-500 ease-in-out`}>
                {colors.map((item, i) => {
                  return (
                    <div onClick={() => selectColor(i)} className={`cursor-pointer flex items-center gap-2 mb-3 ${color === i ? 'bg-gray' : ''} border-[#f6f6f6] border w-fit px-5 py-2 rounded-full `} key={i}>
                      {color === i ? <div className="w-4 h-4 rounded-full bg-white border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div> :

                        <div className="w-3 h-3 rounded-full bg-white border border-dark"></div>}

                      <div className={`${color === i ? 'text-primary' : ''} font-bold`}>{item}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mt-3 w-full rounded-xl h-fit border-2 border-gray py-5 px-3">
              <div className="w-full flex items-center justify-between mb-5">
                <div className="font-bold text-xl">Avalaibility</div>
                <Icon5 onClick={() => setOpenAvail(prev => !prev)} className='text-xl cursor-pointer' />
              </div>

              <div className={`${openavail ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'} overflow-hidden transition-all duration-500 ease-in-out`}>
                {avail.map((item, i) => {
                  return (
                    <div onClick={() => selectAvail(i)} className={`cursor-pointer flex items-center gap-2 mb-3 ${aval === i ? 'bg-gray' : ''} border-[#f6f6f6] border w-fit px-5 py-2 rounded-full `} key={i}>
                      {aval === i ? <div className="w-4 h-4 rounded-full bg-white border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div> :

                        <div className="w-3 h-3 rounded-full bg-white border border-dark"></div>}

                      <div className={`${aval === i ? 'text-primary' : ''} font-bold`}>{item}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>


          <div className={`lg:w-[80%] w-full   `}>
            <div className="flex lg:items-center md:flex-row gap-2 lg:gap-0 flex-col items-start w-full justify-between text-dark">
              <div className="text-[1.1rem]">Showing {(filteredData.length > 0 && filteredData.length - filteredData.length) + 1}-{filteredData.length} of {data.length} results</div>
              <div className="flex items-center gap-3">
                <div className="">Sort by:</div>
                <div className="max-w-40 px-2 bg-white border border-gray py-1 rounded-full flex items-center justify-between">
                  <input type="text" className='w-[90%] pl-1 outline-none' placeholder='Default sorting' />
                  <FaChevronDown className='text-dark cursor-pointer' />
                </div>
                <div className="max-w-20 px-2 bg-white border-gray border py-1 rounded-full flex items-center justify-between">
                  <input type="text" className='w-[90%] pl-1 outline-none' placeholder='Size' />
                  <FaChevronDown className='text-dark cursor-pointer' />
                </div>
              </div>
            </div>

            <div className={` ${loading && 'h-[100dvh]  animate-pulse z-10'}`}>
              {loading ? <div className="h-full w-full flex items-center justify-center">
                <Loading />
              </div> : <div className="grid mt-4 w-full  grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredData && filteredData.map((item) => {
                  // const isEven = 
                  return (
                    <div className="bg-gray w-[100%] mx-auto h-fit rounded-md pt-3" key={item.id}>
                      <div className="px-2 w-full">
                        <div className="flex items-center justify-between">
                          <div className="px-2 py-1 rounded-full bg-green text-xs">
                            {item.id % 2 === 0 ? '-10%' : '20%'}
                          </div>
                          <div className={`px-1 py-1 rounded-full bg-white ${item.id % 2 === 0 ? 'text-red-500' : 'text-dark'}`}>
                            <MdOutlineFavorite className='text-lg' />
                          </div>
                        </div>
                        <div ondr className="mb-3 w-full mt-3">
                          {item.images[0] ? <img src={item.images[0]} className="w-full h-40  object-contain" alt={`Product ${item.id}`} /> : 'No image to display, pls check your internet connection!'}

                        </div>
                      </div>
                      <div className="h-20 rounded-xl w-full bg-green px-5">
                        <div className={`flex h-full w-full justify-between items-center`}>
                          <div className="h-full flex items-start justify-center flex-col">
                            <div className="">{item.title}</div>
                            <div className="">{formatter.format(item.price)}</div>
                          </div>
                          <div onClick={AddItems} className="cursor-pointer px-4 py-4 rounded-full bg-white flex items-center justify-center">
                            <BsFillCartDashFill onMouseOver={() => selectProduct(item.id)} className='text-primary text-2xl ' />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>}
            </div>
          </div>

        </div>
        <div className="w-11/12 mx-auto mt-20">
          <Hassle />
        </div>
      </div>
    </Layout>
  )
}

export default Products