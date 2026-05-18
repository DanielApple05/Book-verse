import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

  const handleLogin = (e) => (

  e.preventDefault

  )
  return (
    <>
      <div className='flex gap-5 xl:text-sm text-xs min-h-screen w-full'>
        <div className='h-screen w-full bg-cover bg-center bg-no-repeat rounded-lg ' style={{ backgroundImage: 'url(/images/landing-page.png)' }}>
        </div>
        <div className='w-full justify-self-center flex flex-col p-5'>
          <p className='place-self-end '> Don't have an account <span className='text-red-400'> Sign up</span>  </p>
          <div className='space-y-3 flex flex-col p-15 w-10/12 '>
            <div>
              <h1 className='font-bold text-xl'>Welcome Back! </h1>
              <p>sign in your account to keep reading!</p>
            </div>
            <form className='space-y-3' onSubmit={handleLogin}>
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'> Email Address</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input type="email" className='p-1 w-full outline-none ' placeholder='Enter your email' />
                </div>
              </div>
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'> Password</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" className=' p-1 w-full outline-none' placeholder='Enter your password' />
                  <FontAwesomeIcon icon={faEye} className='cursor-pointer' />
                </div>
              </div>
              <button className='w-full bg-[#1B1F3B] p-1 rounded-lg text-white cursor-pointer hover:text-gray-200'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
