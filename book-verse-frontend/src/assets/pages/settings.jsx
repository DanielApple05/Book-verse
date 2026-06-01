import React from 'react';
import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear, faArrowRight, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import MobileNavBar from '../components/navigations/mobileNavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Settings = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(!!token);
  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signIn');
  };




  return (
    <div>
      <Header />
      <div className='flex'>
        <SideNavBar />
        <div className='mt-20 flex-1 p-5 bg-amber-50 '>
          <h1 className='text-2xl font-bold '>Settings</h1>
          <p> Manage your preference and account settings </p>
          <div className='bg-white rounded p-3 w-full space-y-3 shadow-xl mx-auto mt-5'>
            <div className='flex items-center gap-4 border-b border-b-gray-200 pb-2'>
              <FontAwesomeIcon icon={faUserGear} />
              <p>Account</p>
            </div>
            <div className='flex items-center justify-between gap-4 border-b border-b-gray-200'>
              <div className='mb-2' >
                <p> Profile information</p>
                <p className=' text-xs'>Update your personal Information</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className='flex items-center gap-4 justify-between'>
              {/* <FontAwesomeIcon icon={ fa } /> */}
              <div className='mb-2'>
                <p> Change Password</p>
                <p className=' text-xs'>keep your account secure</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className='bg-white rounded p-3 w-full space-y-3 shadow-xl mx-auto mt-5'>
            <p className='font-bold  border-b border-b-gray-200 pb-2'>Preferences</p>
            <div className='flex items-center justify-between gap-4 border-b border-b-gray-200'>
              <div>
                <p> Theme</p>
                <p className='text-xs'> Choose your preferred theme</p>
              </div>
              <div className='text-sm  '>
                <button className='p-1 rounded-xl m-2 border-2 border-[#f3b795] hover:text-white font-semibold hover:bg-[#E8834A] cursor-pointer'>Light</button>
                <button className='p-1 font-semibold rounded-xl border-2 border-[#f3b795] hover:text-white hover:bg-[#E8834A] cursor-pointer'>Dark</button>
              </div>
            </div>
            <div className='flex items-center justify-between gap-4 '>
              <div>
                <p>Auto Dark Mode </p>
                <p className='text-xs'> Switch to dark mode at night </p>
              </div>
              <div>
                <FontAwesomeIcon icon={isDarkMode ? faToggleOn : faToggleOff}
                  className='text-3xl cursor-pointer text-[#E8834A] '
                  onClick={() => setIsDarkMode(!isDarkMode)} />
              </div>
            </div>
          </div>
          <div className='bg-white rounded p-3 w-full space-y-3 shadow-xl mt-5 '>
            <p className='font-bold pb-2 border-b border-b-gray-200'> Others</p>
            <div onClick={signOut} className=' flex items-center justify-between cursor-pointer'>
              <div>
                <p className='text-red-500'>{isloggedIn ? 'Sign Out' : 'Sign In'}</p>
                <p className='text-xs'>{isloggedIn ? 'Sign out of your account' : 'Sign in to your account'}</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
              {isloggedIn &&  <div className=' pt-2 border-t border-t-gray-200 flex items-center justify-between cursor-pointer'>
              <div>
                <p className='text-red-500'>Delete Account</p>
                <p className='text-xs'>Delete your account </p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div> }
          </div>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
}

export default Settings;
