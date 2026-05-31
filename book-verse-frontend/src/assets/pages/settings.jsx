import React from 'react';
import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MobileNavBar from '../components/navigations/mobileNavBar';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signIn');
  };

  return (
    <div>
      <Header />
      <div className='flex'>
        <SideNavBar />
        <div className='mt-20 flex-1 p-5 bg-amber-50'>
          <h1 className='text-2xl font-bold '>Settings</h1>
          <p> Manage your preference and account settings </p>
          <div className='bg-white rounded p-3 xl:w-70 w-full space-y-3 shadow-2xl'>
            <div className='flex items-center gap-4 border-b border-b-gray-200 pb-2'>
              <FontAwesomeIcon icon={faCircleUser} />
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
          <div className='bg-white rounded p-3 xl:w-70 w-full space-y-3 shadow-2xl mt-5'>
            <p className='font-bold  border-b border-b-gray-200 pb-2'>Preferences</p>
            <div className='flex items-center justify-between gap-4 border-b border-b-gray-200'>
              <div>
                <p> Theme</p>
                <p className='text-xs'> Choose your preferred theme</p>
              </div>
              <div className='text-sm  '>
                <button className='p-1 rounded-xl m-2 border hover:text-white hover:bg-blue-950'>Light</button>
                <button className='p-1 rounded-xl border hover:text-white hover:bg-blue-950'>Dark</button>
              </div>
            </div>
            <div className='flex items-center justify-between gap-4 '>
              <div>
                <p>Auto Dark Mode </p>
                <p className='text-xs'> Switch to dark mode at night </p>
              </div>
              <input type="checkbox" />
            </div>
          </div>
          <div className='bg-white rounded p-3 xl:w-70 w-full space-y-3 shadow-2xl mt-5'>
            <p className='font-bold border-b border-b-gray-200 pb-2'> Others</p>
            <div onClick={signOut} className=' border-b border-b-gray-200 pb-2 flex items-center justify-between cursor-pointer'>
              <div>
                <p className='text-red-500'>Sign Out</p>
                <p className='text-xs'>Sign out of your account</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className=' flex items-center justify-between cursor-pointer'>
             <div>
               <p className='text-red-500'>Delete Account</p>
              <p className='text-xs'>Delete your account</p>
             </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
}

export default Settings;
