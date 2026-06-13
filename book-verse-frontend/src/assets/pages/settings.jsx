import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import MobileNavBar from '../components/navigations/mobileNavBar';
import Themes from '../components/themes';
import UserDetail from '../components/userComponent/userDetail';
import ChangePassword from '../components/userComponent/changePassword';
import DeleteAccount from '../components/userComponent/deleteAccount';
import SignOut from '../components/userComponent/signOut';
import { getToken } from '../../helpers';
import { Link } from 'react-router-dom';


const Settings = () => {

  const token = getToken();
  const isLoggedIn = !!token;


  return (
    <>
      <Header />
      <div className='xl:flex block xl:pb-0 pb-15'>
        <SideNavBar />
        <div className='xl:mt-20 mt-15 inset-0 flex-1 p-5 dark:bg-gray-950 dark:text-white bg-amber-50 w-full '>
          <h1 className='text-2xl font-bold '>Settings</h1>
          <p> Manage your preference and account settings </p>
          <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl mx-auto mt-5 '>
            <div className='flex items-center gap-4 border-b border-b-gray-200 pb-2'>
              <FontAwesomeIcon icon={faUserGear} />
              <p className='font-bold'>Account</p>
            </div>
            {isLoggedIn ?
              <div className='space-y-3'>
                <UserDetail />
                <ChangePassword  />
              </div> : <p> <Link to='/signIn' className='text-red-500'> sign in  </Link> to see account info </p>
            }
          </div>
          < Themes />
          <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl my-5  '>
            <p className='font-bold pb-2 border-b border-b-gray-200'> Others</p>
            <SignOut />
            <DeleteAccount />
          </div>
        </div>
      </div>
      <MobileNavBar />
    </ >
  );
}

export default Settings;
