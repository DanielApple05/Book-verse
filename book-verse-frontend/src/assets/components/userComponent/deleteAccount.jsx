import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { EyeOff, Eye } from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserFromToken } from '../../../utils';
import { getToken } from '../../../helpers';
import { useLibrary } from '../../../context/libraryContext.jsx';

const DeleteAccount = () => {
  const navigate = useNavigate();
  const { clearLibrary } = useLibrary();
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
    setDeleteError('')

    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_BACKEND_URL;
      await axios.delete(`${API_URL}/api/auth/delete-account`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { password: deletePassword }
      });
      clearLibrary();
      localStorage.removeItem('token');
      navigate('/signIn');
    } catch (err) {
      setDeleteError(err.response?.data?.message || 'Failed to delete account');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = deleteModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [deleteModal]);

  return (
    <>
      {isLoggedIn &&
        <div className='border border-slate-200 dark:border-slate-700 mx-auto rounded-lg p-4 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-colors duration-200'>
          <div onClick={() => setDeleteModal(prev => !prev)} className='flex items-center justify-between cursor-pointer'>
            <div >
              <p className='text-red-600 dark:text-red-400 mb-3'>Delete Account</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Delete your account </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          {deleteModal &&
            <>
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60"
              />
              <div className='fixed xl:w-[50%] w-[80%] border-t border-gray-200 space-y-3 p-5 flex flex-col justify-self-center items-center bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-xl inset-x-4 top-40 shadow-xl z-70'>
                <button
                  disabled={loading}
                  onClick={() => setDeleteModal(!deleteModal)}>
                  <FontAwesomeIcon
                    icon={faX}
                    className={` cursor-pointer hover:bg-red-600 p-2 rounded-lg  ${loading ? "animate-spin" : ""}`} />
                </button>
                <p className='text-red-500 text-xs my-2 text-center'>Are you sure you want to delete your account?</p>
                <form className=' flex flex-col items-center gap-6 mt-2 ' onSubmit={deleteAccount}  >
                  <input
                    type='password'
                    value={deletePassword}
                    onChange={(e) => setDeletePassword(e.target.value)}
                    placeholder='Enter your password to confirm'
                    className='outline-none border border-gray-300 w-full rounded p-1 placeholder:text-xs' />
                  {deleteError && <p className='text-red-500 text-xs mt-1'>{deleteError}</p>}
                  <button
                    type='submit'
                    disabled={loading}
                    className='bg-red-500 text-sm text-white px-3 py-1 disabled:opacity-50 cursor-pointer rounded'>{loading ? 'Deleting...' : 'Yes, delete'}</button>
                </form>

              </div>
            </>}
        </div>}
    </>
  );
}

export default DeleteAccount;
