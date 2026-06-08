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
  );
}

export default UserDetail;
