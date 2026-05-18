import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return (
    <>
      <div className='flex p-5 gap-5 xl:text-sm text-xs'>
        <div className='h-screen w-6/12 bg-cover bg-center bg-no-repeat rounded-lg ' style={{ backgroundImage: 'url(/images/landing-page.png)' }}>
        </div>
        <div>
          <p> Don't have an account <span className='text-red-400'> Sign up</span>  </p>
          <div className='space-y-3'>
            <div>
              <h1 className='font-bold text-xl'>Welcome Back! </h1>
              <p>sign in your account to keep reading!</p>
            </div>
            <form className='space-y-3'>
              <div className='grid gap-2 '>
                <label className='font-semibold'> Email Address</label>
                <div className='border-gray-200 border pl-2'>
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <input type="email" className='p-1 ' placeholder='Enter your email' />
                </div>
              </div>
              <div className='grid gap-2'>
                <label className='font-semibold'> Password</label>
                <div className='border-gray-200 border pl-2'>
                    <FontAwesomeIcon icon={faLock}/>
                  <input type="password" className=' p-1' placeholder='Enter your password' />
                  <FontAwesomeIcon icon={faEye} className='cursor-pointer'/>
                </div>
              </div>
              <button className='w-full bg-[#1B1F3B] p-1 rounded-lg text-white'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
