import React, { useState } from 'react'
import Loading from '../components/Loading'
import InputTag from '../components/InputTag'
import { Link, useNavigate } from 'react-router-dom'
import { errorMessage } from '../assets/utils/functions'

const Signup = () => {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [check,setCheck] = useState('')
  const [forms, setForms] = useState({
    email: '',
    password: '',
    fullname: '',
    username: '',
    role: '',
    confirm_password: ''
  })
  const [active,setActive] = useState(null)

  const role = [
    {
      value:'admin',
      id:0
    },
    {
      value:'seller',
      id:1
    },
    {
      value:'buyer',
      id:2
    },
  ]
  const selectBox = (param) =>{
    setForms({
      ...forms,
      role:param.value
    })
    setActive(param.id)
  }
  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value
    })
  }
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  const Submit = (e) => {
    e.preventDefault()
    if (!forms.fullname) return errorMessage('Fullname is required')
    if (!forms.username) return errorMessage('Username is required')
    if (!forms.email) return errorMessage('Email address is required')
    if (!isValidEmail(forms.email)) return errorMessage('Please input a valid email')
    if (!forms.password) return errorMessage('Password is required')
    if (forms.password.length < 6) return errorMessage('Password characters should not be less than 6')
    if (!forms.confirm_password) return errorMessage('Confirm password is required')
    if (forms.confirm_password !== forms.password) return errorMessage('Password mismatch, try again')
      if (!forms.role) return errorMessage('Role is required, select one')
      // return console.log(forms)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // setLogin(true)
      // navigate('/products')
    }, 3000)

  }

  return (
    //    <Layout>
    <div className={`text-dark  font-bold w-full h-screen  ${loading ? 'bg-white/90' : 'bg-green'} flex  items-center justify-center`}>
      {loading ? <Loading /> :
        <form onSubmit={Submit} className="lg:w-[40%] w-11/12 h-[90dvh] overflow-auto py-16 bg-white rounded-lg flex flex-col  text-dark px-5">

          <div className="mb-3 text-center w-full text-2xl">Signup for an Account</div>
          <div className="flex items-start gap-4 flex-col mt-4 w-[90%] mx-auto">
            <div className="flex items-start gap-1 flex-col w-full">
              <div className="">Full Name:</div>
              <InputTag name={'fullname'} value={forms.fullname} onchange={handleChange} placeholder={'your full name'} />
            </div>
            <div className="flex items-start gap-1 flex-col w-full">
              <div className="">Username:</div>
              <InputTag name={'username'} value={forms.username}  onchange={handleChange} placeholder={'your username'} />
            </div>
            <div className="flex items-start gap-1 flex-col w-full">
              <div className="">Email:</div>
              <InputTag formtype='email' name={'email'} value={forms.email} onchange={handleChange} placeholder={'your email address'} />
            </div>
            <div className="flex items-start gap-1 flex-col w-full">
              <div className="">Role:</div>
              <div className="grid grid-cols-3 items-center gap-5 w-full text-sm">
            
                {role.map((item, i) => {
                  return (
                    <div onClick={() => selectBox(item) } className={`cursor-pointer flex items-center gap-2 mb-3 ${item === i ? 'bg-gray' : ''} border-[#f6f6f6] border w-fit px-5 py-2 rounded-full `} key={i}>
                      {active === i? <div className="w-4 h-4 rounded-full bg-white border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div> :

                        <div className="w-3 h-3 rounded-full bg-white border border-dark"></div>}

                      <div className={`${active === i  ? 'text-primary' : ''} font-bold`}>{item.value}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex items-start gap-1 flex-col w-full">
              <div className="">Password:</div>
              <InputTag formtype='password' name={'password'} value={forms.password} onchange={handleChange} placeholder={'enter password'} />
            </div>
            <div className="flex items-start gap-1 flex-col w-full">
              <div className="">Confirm Password:</div>
              <InputTag placeholder={'confirm password'} name={'confirm_password'} onchange={handleChange} value={forms.confirm_password} formtype='password' />
            </div>
          </div>
          <div className="w-11/12 rounded-full bg-primary  my-5 mx-auto">
            <button className='w-full py-3 text-white text-lg'>Sign Up</button>
          </div>
          <div className="flex items-start flex-col w-11/12 mx-auto">
            <div className="">Have an account? <Link to={`/login`} className='font-bold text-green cursor-pointer '>Login</Link></div>
            <div className="">Back to <span onClick={() => navigate(`/`)} className='cursor-pointer font-bold text-green'>Home</span></div>
          </div>
        </form>}
    </div>
    //    </Layout>
  )

}

export default Signup