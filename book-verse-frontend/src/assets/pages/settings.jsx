import React from 'react';
import Header from '../components/header-component/header';
import SideNavBar from '../components/navigations/sideNavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear, faAngleDown, faArrowRight, faToggleOn, faToggleOff, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { EyeOff, Eye } from 'lucide-react';
import MobileNavBar from '../components/navigations/mobileNavBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../../context/themeContext';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Settings = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isValidToken = token && token !== 'undefined' && token.split('.').length === 3;
  let user = null;

  try {
    if (isValidToken) {
      user = jwtDecode(token);
    }
  } catch (error) {
    console.error('Invalid token');
  }
  const { darkMode, toggleDarkMode, autoDarkMode, toggleAutoDarkMode } = useTheme();
  const isLoggedIn = !!token;
  const [showDetails, setShowDetails] = useState(false);
  const [passwordInfo, setPasswordInfo] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState('');

  const deleteAccount = async (e) => {
    e.preventDefault();

    if (deletePassword === '') {
      setDeleteError('Password is required');
      return;
    }

    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_BACKEND_URL;
      await axios.delete(`${API_URL}/api/auth/delete-account`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { password: deletePassword }
      });
      localStorage.removeItem('token');
      navigate('/signIn');
    } catch (err) {
      setDeleteError(err.response?.data?.message || 'Failed to delete account');
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signIn');
  };

  const themes = ['Light', 'Dark'];
  const maskEmail = (email) => {
    if (!email) return '';
    const atIndex = email.indexOf('@');
    if (atIndex === -1) return email;
    const name = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);
    return `${name.slice(0, 3)}***@${domain}`;
  };

  const changePassword = async (e) => {
    e.preventDefault();

    let newError = {};

    if (currentPassword === '') {
      newError.currentPassword = 'Current password is required';
    }
    if (newPassword === '') {
      newError.newPassword = 'New password is required';
    } else if (newPassword === currentPassword) {
      newError.newPassword = 'New password must be different from current password';
    }
    if (confirmPassword === '') {
      newError.confirmPassword = 'Please confirm your new password';
    } else if (confirmPassword !== newPassword) {
      newError.confirmPassword = 'Passwords do not match';
    }

    setError(newError);

    if (Object.keys(newError).length > 0) return;

    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_BACKEND_URL;
      await axios.put(`${API_URL}/api/auth/change-password`, {
        currentPassword,
        newPassword
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Password changed successfully');
      setPasswordInfo(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError({ api: err.response?.data?.message || 'Failed to change password' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className='xl:flex block flex-row '>
        <SideNavBar />
        <div className='mt-15 flex-1 p-5 dark:bg-gray-950 dark:text-white bg-amber-50 w-full '>
          <h1 className='text-2xl font-bold '>Settings</h1>
          <p> Manage your preference and account settings </p>
          <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl mx-auto mt-5'>
            <div className='flex items-center gap-4 border-b border-b-gray-200 pb-2'>
              <FontAwesomeIcon icon={faUserGear} />
              <p className='font-bold'>Account</p>
            </div>
            <div className=' border-b border-b-gray-200 cursor-pointer'>
              <div className='flex items-center justify-between gap-4 mb-1'
                onClick={() => setShowDetails(prev => !prev)}>
                <div className='mb-2 space-y-1' >
                  <p className='font-semibold'> Profile information</p>
                  <p className=' text-xs'>Update your personal Information</p>
                </div>
                <FontAwesomeIcon icon={showDetails ? faAngleUp : faAngleDown} />
              </div>
              {
                showDetails &&
                <div className='mb-2 border-t border-gray-200 space-y-3 text-sm py-3'>
                  <div className='flex justify-between items-center'>
                    <p className=''>Name: {user ? user.username : 'John Doe'}</p>
                    <p className=' text-blue-500 pr-2'> edit</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className=''>Email: {user ? maskEmail(user.email) : ''}</p>
                    <p className=' text-blue-500 pr-2'> edit</p>
                  </div>
                </div>
              }
            </div>
            <div className=''>
              <div className='flex items-center gap-4 justify-between cursor-pointer' onClick={() => setPasswordInfo(prev => !prev)}>
                <div className='mb-2'>
                  <p className='font-semibold'> Change Password</p>
                  <p className=' text-xs'>keep your account secure</p>
                </div>
                <FontAwesomeIcon icon={passwordInfo ? faAngleUp : faAngleDown} />
              </div>
              {
                passwordInfo &&
                <form onSubmit={changePassword} className='mb-2 border-t border-gray-200 space-y-3 text-sm py-2  flex flex-col' >
                  <div className=' xl:w-[20%] w-[50%]'>
                    <p className='text-xs font-semibold mb-1'>Current Password</p>
                    <input
                      type={viewPassword ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className='outline-none border border-gray-300 rounded text-sm p-1 w-full' />
                    {error.currentPassword && <p className='text-red-500 text-xs'>{error.currentPassword}</p>}
                  </div>
                  <div className='xl:w-[20%] w-[50%]'>
                    <p className='text-xs font-semibold mb-1'>New Password</p>
                    <div className='flex items-center relative '  >
                      <input type={viewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className='outline-none border border-gray-300 rounded text-sm p-1  flex flex-1 ' />
                      {viewPassword ? (
                        <Eye
                          className='w-4 cursor-pointer absolute right-2'
                          onClick={() => setViewPassword(!viewPassword)} />
                      ) : (
                        <EyeOff
                          className='w-4 cursor-pointer absolute right-2'
                          onClick={() => setViewPassword(!viewPassword)} />
                      )}
                    </div>
                    {error.newPassword && <p className='text-red-500 text-xs'>{error.newPassword}</p>}
                  </div>
                  <div className='xl:w-[20%] w-[50%]'>
                    <p className='text-xs font-semibold mb-1'>Confirm New Password</p>
                    <input
                      type={viewPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className='outline-none border border-gray-300 rounded text-sm p-1 w-full' />
                    {error.confirmPassword && <p className='text-red-500 text-xs'>{error.confirmPassword}</p>}
                  </div>
                  {error.api && <p className='text-red-500 text-xs'>{error.api}</p>}
                  <button
                    type='submit'
                    disabled={loading}
                    className='bg-[#E8834A] text-white px-3 py-1 xl:w-[20%] w-[50%] rounded cursor-pointer disabled:opacity-50'
                  >
                    {loading ? 'Updating...' : 'Update Password'}
                  </button>
                </form>
              }
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
                <FontAwesomeIcon icon={autoDarkMode ? faToggleOn : faToggleOff}
                  className='text-3xl cursor-pointer text-[#E8834A] '
                  onClick={toggleAutoDarkMode} />
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl mt-5 '>
            <p className='font-bold pb-2 border-b border-b-gray-200'> Others</p>
            <div onClick={signOut} className=' flex items-center justify-between cursor-pointer'>
              <div>
                <p className='text-red-500'>{isLoggedIn ? 'Sign Out' : 'Sign In'}</p>
                <p className='text-xs'>{isLoggedIn ? 'Sign out of your account' : 'Sign in to your account'}</p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            {isLoggedIn && <div className=' pt-2 border-t border-t-gray-200 '>
              <div onClick={() => setDeleteModal(prev => !prev)} className='flex items-center justify-between cursor-pointer'>
                <div >
                  <p className='text-red-500'>Delete Account</p>
                  <p className='text-xs'>Delete your account </p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              {deleteModal &&
                <div className='border-t border-t-gray-300 mt-2 py-2'>
                  <p className='text-red-500 text-xs mb-2'>Are you sure you want to delete your account?</p>
                  <form className='flex items-center gap-2 mt-2 ' onSubmit={deleteAccount}  >
                    <input
                      type='password'
                      value={deletePassword}
                      onChange={(e) => setDeletePassword(e.target.value)}
                      placeholder='Enter your password to confirm' className='outline-none border border-gray-300 rounded text-sm p-1 placeholder:text-xs' />
                    <button
                      type='submit'
                      disabled={loading}
                      className='bg-red-500 text-white px-3 py-1 cursor-pointer rounded'>{loading ? 'Deleting...' : 'Yes, delete'}</button>
                  </form>
                  {deleteError && <p className='text-red-500 text-xs mt-1'>{deleteError}</p>}
                </div>
              }
            </div>}
          </div>
        </div>
      </div>
      <MobileNavBar />
    </ >
  );
}

export default Settings;
