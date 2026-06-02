import React from 'react';
import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear, faArrowRight, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import MobileNavBar from '../components/navigations/mobileNavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../../context/themeContext';

const Settings = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { darkMode, toggleDarkMode, autoDarkMode, toggleAutoDarkMode } = useTheme();
  const [isloggedIn, setIsLoggedIn] = useState(!!token);
  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signIn');
  };

  const themes = ['Light', 'Dark'];

  return (
    <div>
      <Header />
      <div className='flex'>
        <SideNavBar />
        <div className='mt-15 flex-1 p-5 dark:bg-gray-950 dark:text-white bg-amber-50 '>
          <h1 className='text-2xl font-bold '>Settings</h1>
          <p> Manage your preference and account settings </p>
          <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl mx-auto mt-5'>
            <div className='flex items-center gap-4 border-b border-b-gray-200 pb-2'>
              <FontAwesomeIcon icon={faUserGear} />
              <p className='font-bold'>Account</p>
            </div>
            <div className='flex items-center justify-between gap-4 border-b border-b-gray-200'>
              <div className='mb-2' >
                <p className='font-semibold'> Profile information</p>
                <p className=' text-xs'>Update your personal Information</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className='flex items-center gap-4 justify-between'>
              {/* <FontAwesomeIcon icon={ fa } /> */}
              <div className='mb-2'>
                <p className='font-semibold'> Change Password</p>
                <p className=' text-xs'>keep your account secure</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl mx-auto mt-5'>
            <p className='font-bold  border-b border-b-gray-200 pb-2'>Preferences</p>
            <div className='flex items-center justify-between gap-4 border-b border-b-gray-200'>
              <div>
                <p className='font-semibold'> Theme</p>
                <p className='text-xs'> Choose your preferred theme</p>
              </div>
              <div className='text-sm'>
                {themes.map((theme) => (
                  <button
                    key={theme}
                    onClick={() => {
                      if (theme === 'Dark' && !darkMode) toggleDarkMode();
                      if (theme === 'Light' && darkMode) toggleDarkMode();
                    }}
                    className={`p-1 rounded-xl m-2 border-2 border-[#f3b795] hover:text-white font-semibold hover:bg-[#E8834A] cursor-pointer ${(theme === 'Dark' && darkMode) || (theme === 'Light' && !darkMode)
                        ? 'bg-[#E8834A] text-white'
                        : ''
                      }`}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
            <div className='flex items-center justify-between gap-4 '>
              <div>
                <p className='font-semibold'>Auto Dark Mode </p>
                <p className='text-xs'> Switch to dark mode at night </p>
              </div>
              <div>
                <FontAwesomeIcon  icon={autoDarkMode ? faToggleOn : faToggleOff}
                  className='text-3xl cursor-pointer text-[#E8834A] '
                  onClick={toggleAutoDarkMode} />
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl mt-5 '>
            <p className='font-bold pb-2 border-b border-b-gray-200'> Others</p>
            <div onClick={signOut} className=' flex items-center justify-between cursor-pointer'>
              <div>
                <p className='text-red-500'>{isloggedIn ? 'Sign Out' : 'Sign In'}</p>
                <p className='text-xs'>{isloggedIn ? 'Sign out of your account' : 'Sign in to your account'}</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            {isloggedIn && <div className=' pt-2 border-t border-t-gray-200 flex items-center justify-between cursor-pointer'>
              <div>
                <p className='text-red-500'>Delete Account</p>
                <p className='text-xs'>Delete your account </p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>}
          </div>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
}

export default Settings;
