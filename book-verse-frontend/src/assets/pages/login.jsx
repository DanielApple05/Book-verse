import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { EyeOff, Eye } from 'lucide-react';

import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const [isRegistering, setIsRegistering] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newError = {};

    if (isRegistering && username.trim() === '') {
      newError.username = 'Username is required';
    }
    if (email.trim() === '') {
      newError.email = 'Email is required';
    }
    if (password.trim() === '') {
      newError.password = 'Password is required';
    }
    if (isRegistering && confirmPassword.trim() === '') {
      newError.confirmPassword = 'Please confirm your password';
    } else if (isRegistering && password !== confirmPassword) {
      newError.confirmPassword = 'Passwords do not match';
    }

    setError(newError);
    if (Object.keys(newError).length > 0) return;
   
    try {
       setIsPending(true);
      if (isRegistering) {
        await axios.post(`${API_URL}/api/auth/register`, { username, email, password });
        setIsRegistering(false);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      }
    } catch (err) {
      setError({ api: err.response?.data?.message || 'Could not complete the request' });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className='xl:flex grid gap-5 xl:text-sm text-xs h-screen w-full'>
      {/* Left image */}
      <div className='xl:h-screen h-full xl:w-[50%] w-full bg-cover bg-center bg-no-repeat rounded-b-xl'
        style={{ backgroundImage: 'url(/images/landing-page.png)' }}
      />

      {/* Right form */}
      <div className='xl:w-[50%] w-full flex flex-col p-5'>
        <p className='place-self-end'>
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}
          <span
            onClick={() => { setIsRegistering(!isRegistering); setError({}); }}
            className='text-red-400 cursor-pointer ml-1'
          >
            {isRegistering ? 'Login' : 'Sign up'}
          </span>
        </p>

        <div className='space-y-3 flex flex-col xl:p-15 p-5 xl:w-10/12 w-full'>
          <div className='space-y-2'>
            {isRegistering ? (
              <div><h1 className='font-bold text-xl'>Create Account</h1><p>Sign up to create your account</p></div>
            ) : (
              <div><h1 className='font-bold text-xl'>Welcome Back!</h1><p>Sign in to your account to keep reading!</p></div>
            )}
          </div>

          {error.api && <p className='text-red-500 text-xs'>{error.api}</p>}

          <form className='space-y-3' onSubmit={handleSubmit}>
            {/* Username - register only */}
            {isRegistering && (
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'>Username</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faCircleUser} />
                  <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='p-2 w-full outline-none'
                    placeholder='Enter your username'
                  />
                </div>
                {error.username && <p className='text-red-500 text-xs'>{error.username}</p>}
              </div>
            )}

            {/* Email */}
            <div className='grid gap-2 w-full'>
              <label className='font-semibold'>Email Address</label>
              <div className='border-gray-200 border pl-2 flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-2 w-full outline-none'
                  placeholder='Enter your email'
                />
              </div>
              {error.email && <p className='text-red-500 text-xs'>{error.email}</p>}
            </div>

            {/* Password */}
            <div className='grid gap-2 w-full'>
              <label className='font-semibold'>Password</label>
              <div className='border-gray-200 border px-2 flex items-center'>
                <FontAwesomeIcon icon={faLock} />
                <input
                  type={viewPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-2 w-full outline-none'
                  placeholder='Enter your password'
                />
                <div className='cursor-pointer' onClick={() => setViewPassword(!viewPassword)}>
                  {viewPassword ? <Eye className='w-4' /> : <EyeOff className='w-4' />}
                </div>
              </div>
              {error.password && <p className='text-red-500 text-xs'>{error.password}</p>}
            </div>

            {/* Confirm Password - register only */}
            {isRegistering && (
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'>Confirm Password</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type={viewPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='p-2 w-full outline-none'
                    placeholder='Confirm your password'
                  />
                </div>
                {error.confirmPassword && <p className='text-red-500 text-xs'>{error.confirmPassword}</p>}
              </div>
            )}

            <div className='flex place-content-center'>
              <button
                type='submit'
                disabled={isPending}
                className='xl:w-full w-6/12 bg-[#1B1F3B] p-2 rounded-lg disabled:opacity-50 text-white cursor-pointer hover:text-gray-200'
              >
                { isPending ? 'Processing...' : isRegistering ? 'Sign Up' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
