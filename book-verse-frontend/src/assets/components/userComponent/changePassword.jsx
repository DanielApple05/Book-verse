import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { EyeOff, Eye } from 'lucide-react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ChangePassword = () => {
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
  const isLoggedIn = !!token;
  const [passwordInfo, setPasswordInfo] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

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
            <div className='flex items-center relative justify-between '  >
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
  );
}

export default ChangePassword;
