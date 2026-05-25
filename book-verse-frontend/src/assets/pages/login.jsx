import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { EyeOff, Eye } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home')
  }
  return (
    <>
      <div className='xl:flex grid gap-5 xl:text-sm text-xs min-h-screen w-full'>
        <div className='xl:h-screen h-full w-full bg-cover bg-center bg-no-repeat rounded-b-xl ' style={{ backgroundImage: 'url(/images/landing-page.png)' }}>
        </div>
        <div className='w-full justify-self-center flex flex-col p-5'>
          <p className='place-self-end '> Don't have an account <span className='text-red-400'> Sign up</span>  </p>
          <div className='space-y-3 flex flex-col xl:p-15 p-5 xl:w-10/12 w-full '>
            <div className='space-y-2'>
              <h1 className='font-bold text-xl'>Welcome Back! </h1>
              <p>sign in your account to keep reading!</p>
            </div>
            <form className=' space-y-5' onSubmit={handleLogin}>
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'> Email Address</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input type="email" className='p-2 w-full outline-none ' placeholder='Enter your email' />
                </div>
              </div>
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'> Password</label>
                <div className='border-gray-200 border px-2 flex items-center'>
                  <FontAwesomeIcon icon={faLock} />
                  <input type={viewPassword ? "text" : "password"} className=' p-2 w-full outline-none' placeholder='Enter your password' />
                  <FontAwesomeIcon icon={faEye} className='cursor-pointer' onClick={() => setViewPassword(!viewPassword)} />
                  
                </div>
              </div>
              <div className='flex place-content-center'>
                <button
                  type='submit'
                  className='xl:w-full w-6/12  bg-[#1B1F3B] p-1 rounded-lg text-white cursor-pointer hover:text-gray-200' >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
