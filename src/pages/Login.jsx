import React, { useState } from 'react'
import Layout from '../components/Layout'
import InputTag from '../components/InputTag'
import { useNavigate } from 'react-router-dom'
import { errorMessage } from '../assets/utils/functions'
import { useSelect } from '../context/SelectContext'
import Loading from '../components/Loading'

const Login = () => {
    const navigate = useNavigate()
    const { login, setLogin } = useSelect()
    const [loading, setLoading] = useState(false)
    const [forms, setForms] = useState({
        email: '',
        password: ''
    })

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
        if (!forms.email) return errorMessage('Email address is required')
        if (!isValidEmail(forms.email)) return errorMessage('Please input a valid email')
        if (!forms.password) return errorMessage('Password is required')
        if (forms.password.length < 6) return errorMessage('Password characters should not be less than 6')
            setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLogin(true)
            navigate('/dashboard')
        }, 3000)


    }
    return (
        //    <Layout>
        <div className={`text-dark  font-bold w-full h-screen ${loading ? 'bg-white/90':'bg-green'} flex  items-center justify-center`}>
            {loading ? <Loading /> :
                <form onSubmit={Submit} className="lg:w-[40%] w-11/12 h-fit py-16 bg-white rounded-lg flex flex-col  text-dark px-5">

                    <div className="mb-3 text-center w-full text-2xl">Login Account</div>
                    <div className="flex items-start gap-4 flex-col mt-4 w-[90%] mx-auto">
                        <div className="flex items-start gap-1 flex-col w-full">
                            <div className="">Email:</div>
                            <InputTag formtype='email' name={'email'} value={forms.email} onchange={handleChange} placeholder={'your email address'} />
                        </div>
                        <div className="flex items-start gap-1 flex-col w-full">
                            <div className="">Password:</div>
                            <InputTag placeholder={'enter your password'} name={'password'} onchange={handleChange} value={forms.password} formtype='password' />
                            <div className="text-green text-sm cursor-pointer">forgot password?</div>
                        </div>
                    </div>
                    <div className="w-11/12 rounded-full bg-primary  my-5 mx-auto">
                        <button className='w-full py-3 text-white text-lg'>Login</button>
                    </div>
                    <div className="flex items-start flex-col w-11/12 mx-auto">
                        <div className="">Don't have account? <span className='font-bold text-green cursor-pointer '>Sign Up</span></div>
                        <div className="">Back to <span onClick={() => navigate(`/`)} className='cursor-pointer font-bold text-green'>Home</span></div>
                    </div>
                </form>}
        </div>
        //    </Layout>
    )
}

export default Login