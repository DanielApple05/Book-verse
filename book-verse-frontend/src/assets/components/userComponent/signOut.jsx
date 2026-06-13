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
    <div onClick={signOut} className='border border-slate-200 dark:border-slate-700 flex items-center justify-between cursor-pointer mx-auto rounded-lg p-4 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-colors duration-200' >
      <div>
        <p className='text-red-600 dark:text-red-400'>{isLoggedIn ? 'Sign Out' : 'Sign In'}</p>
        <p className='text-xs text-slate-500 dark:text-slate-400'>{isLoggedIn ? 'Sign out of your account' : 'Sign in to your account'}</p>
      </div>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

export default SignOut;
