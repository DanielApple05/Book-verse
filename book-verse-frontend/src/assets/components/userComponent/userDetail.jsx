import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';
import { getUserFromToken } from '../../../utils';
import { getToken } from '../../../helpers';

const UserDetail = () => {
  const [showDetails, setShowDetails] = useState(false);
  let user = getUserFromToken();
  const token = getToken();
  const isLoggedIn = !!token;
  if (!isLoggedIn) {
    return null;
  }

  const maskEmail = (email) => {
    if (!email) return '';
    const atIndex = email.indexOf('@');
    if (atIndex === -1) return email;
    const name = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);
    return `${name.slice(0, 3)}***@${domain}`;
  };

  return (
    <>
      {isLoggedIn &&
        <div className='border border-slate-200 dark:border-slate-700 cursor-pointer mx-auto rounded-lg p-4 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-colors duration-200'>
          <div className='flex items-center justify-between gap-4 mb-1'
            onClick={() => setShowDetails(prev => !prev)}>
            <div className='mb-2 space-y-3' >
              <p className='font-semibold text-slate-900 dark:text-slate-100'> Profile information</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Update your personal Information</p>
            </div>
            <FontAwesomeIcon icon={showDetails ? faAngleUp : faAngleDown} />
          </div>
          {
            showDetails &&
            <div className='mb-2 border-t border-gray-200 space-y-3 text-sm py-3'>
              <div className='flex justify-between items-center'>
                <p className='text-slate-700 dark:text-slate-200'>Name: {user ? user.username : 'John Doe'}</p>
                <p className='text-indigo-600 dark:text-cyan-400 pr-2'> edit</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className=''>Email: {user ? maskEmail(user.email) : ''}</p>
              </div>
            </div>
          }
        </div>}
    </>
  );
}

export default UserDetail;
