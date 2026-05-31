import React from 'react';
import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SideNavBar />
        <div className='mt-20 flex-1 pl-5 bg-amber-50'>
          <h1 className='text-2xl font-bold '>Settings</h1>
          <p> Manage your preference and account settings </p>
          <div className='bg-white rounded p-3 w-80'>
            <div className='flex items-center gap-4'>
              <FontAwesomeIcon icon={faCircleUser} />
              Account
            </div>
            <div>
               
              <div>
                <p> Profile information</p>
                <p>Update your personal Information</p>
              </div>
            </div>
            <div>
              {/* <FontAwesomeIcon icon={ fa } /> */}
              Change Password
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
