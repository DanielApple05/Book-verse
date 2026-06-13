import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const SignOut = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signIn');
  };


  return (
    <div onClick={signOut} className=' flex items-center justify-between cursor-pointer mx-auto rounded-lg p-2 bg-orange-300 shadow-2xl' >
      <div>
        <p className='text-red-500'>{isLoggedIn ? 'Sign Out' : 'Sign In'}</p>
        <p className='text-xs'>{isLoggedIn ? 'Sign out of your account' : 'Sign in to your account'}</p>
      </div>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

export default SignOut;
