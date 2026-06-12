import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { EyeOff, Eye } from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserFromToken } from '../../../utils';
import { getToken } from '../../../helpers';

const DeleteAccount = () => {
  const navigate = useNavigate();
  let user = getUserFromToken();
  const token = getToken();
  const isLoggedIn = !!token;
  if (!isLoggedIn) {
    return null;
  }

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

  return (
    <>
      {isLoggedIn &&
        <div className=' pt-2 border-t border-t-gray-200 mb-5 '>
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
                  className='bg-red-500 text-white px-3 py-1 disabled:opacity-50 cursor-pointer rounded'>{loading ? 'Deleting...' : 'Yes, delete'}</button>
              </form>
              {deleteError && <p className='text-red-500 text-xs mt-1'>{deleteError}</p>}
            </div>
          }
        </div>}
    </>
  );
}

export default DeleteAccount;
