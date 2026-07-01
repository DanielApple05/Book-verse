import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faX } from '@fortawesome/free-solid-svg-icons';
import { EyeOff, Eye } from 'lucide-react';
import axios from 'axios';
import { getUserFromToken } from '../../../utils';
import { getToken } from '../../../helpers';
import {changePassword} from '../../../api';

const ChangePassword = () => {

  let user = getUserFromToken();

  const [passwordInfo, setPasswordInfo] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const token = getToken();
  const isLoggedIn = !!token;
  if (!isLoggedIn) {
    return null;
  }

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
      await changePassword({
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

  useEffect(() => {
    document.body.style.overflow = passwordInfo ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [passwordInfo]);

  return (
    <>
      {isLoggedIn &&
        <div className='relative mx-auto rounded-lg p-4 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-colors duration-200'>
          <div className='my-2 flex flex-col gap-2 justify-between cursor-pointer' onClick={() => setPasswordInfo(prev => !prev)}>
            <p className='font-semibold text-slate-900 dark:text-slate-100'> Change Password</p>
            <p className='text-sm text-slate-500 dark:text-slate-400'>keep your account secure</p>
          </div>
          {
            passwordInfo &&
            <>
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60"
              />
              <form onSubmit={changePassword} className='fixed xl:w-[50%] w-[80%] border-t border-gray-200 space-y-3 p-5 flex flex-col justify-self-center items-center bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-xl inset-x-4 top-40 shadow-xl z-70' >
                <button
                  disabled={loading}
                  onClick={() => setPasswordInfo(!passwordInfo)}>
                  <FontAwesomeIcon
                    icon={faX}
                    className={` cursor-pointer hover:bg-red-600 p-2 rounded-lg  ${loading ? "animate-spin" : ""}`} />
                </button>
                <div className=' xl:w-[80%] w-full'>
                  <p className='text-sm font-semibold mb-1'>Current Password</p>
                  <input
                    type={viewPassword ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className='outline-none border border-gray-300 rounded p-1 w-full' />
                  {error.currentPassword && <p className='text-red-500 text-xs'>{error.currentPassword}</p>}
                </div>
                <div className='xl:w-[80%] w-full'>
                  <p className='text-sm font-semibold mb-1'>New Password</p>
                  <div className='flex items-center relative justify-between '  >
                    <input type={viewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className='outline-none border border-gray-300 rounded p-1  flex flex-1 ' />
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
                <div className='xl:w-[80%] w-full'>
                  <p className='text-xs font-semibold mb-1'>Confirm New Password</p>
                  <input
                    type={viewPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='outline-none border border-gray-300 rounded  p-1 w-full' />
                  {error.confirmPassword && <p className='text-red-500 text-xs'>{error.confirmPassword}</p>}
                </div>
                {error.api && <p className='text-red-500 text-xs'>{error.api}</p>}
                <button
                  type='submit'
                  disabled={loading}
                  className='bg-[#b55923] text-white px-3 py-1 xl:w-[30%] w-[80%] rounded cursor-pointer disabled:opacity-50'
                >
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </>}
        </div>}
    </>
  );
}

export default ChangePassword;
