import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { EyeOff, Eye } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState([EyeOff]);
  const [notUser, setNotUser] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    let newError = {};

    if (notUser && username.trim() === '') {
      newError.username = 'Username is required';
    }
    if (email.trim() === '') {
      newError.email = 'Email is required';
    }
    if (password.trim() === '') {
      newError.password = 'Password is required';
    }
    if (!notUser && confirmPassword.trim() === '') {
      newError.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newError.confirmPassword = 'Passwords do not match';
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      navigate('/home')

    }
  }
  return (
    <>
      <div className='xl:flex grid gap-5 xl:text-sm text-xs h-screen w-full'>
        <div className='xl:h-screen h-full xl:w-[50%] w-full  bg-cover bg-center bg-no-repeat rounded-b-xl ' style={{ backgroundImage: 'url(/images/landing-page.png)' }}>
        </div>
        <div className='xl:w-[50%] w-full  flex flex-col p-5'>
          <p className='place-self-end '> {notUser ? "Already have an account?" : "Don't have an account?"} <span onClick={() => setNotUser(!notUser)} className='text-red-400 cursor-pointer'> {notUser ? "Login" : "Sign up"}</span>  </p>
          <div className='space-y-3 flex flex-col xl:p-15 p-5 xl:w-10/12 w-full '>
            <div className='space-y-2'>
              {notUser ?
                (<div><h1 className='font-bold text-xl'>Welcome Back! </h1> <p>sign in your account to keep reading!</p></div>) :
                (<div><h1 className='font-bold text-xl'>Create Account</h1> <p>sign up to create your account</p></div>)}
            </div>
            <form className=' space-y-3 h-60' onSubmit={handleLogin}>
              {notUser && <div className='grid gap-2 w-full'>
                <label
                  className='font-semibold'> Username</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faCircleUser} />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='p-2 w-full outline-none ' placeholder='Enter your username' />
                </div>
                {error.username && <p className='text-red-500 text-xs'>{error.username}</p>}
              </div>}
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'> Email Address</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-2 w-full outline-none ' placeholder='Enter your email' />
                </div>
                {error.email && <p className='text-red-500 text-xs'>{error.email}</p>}
              </div>
              <div className='grid gap-2 w-full'>
                <label className='font-semibold'> Password</label>
                <div className='border-gray-200 border px-2 flex items-center'>
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type={viewPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className=' p-2 w-full outline-none' placeholder='Enter your password' />
                  <div className='cursor-pointer' onClick={() => setViewPassword(!viewPassword)}>
                    {viewPassword ? <FontAwesomeIcon icon={faEye} />
                      : <EyeOff className='w-4' />
                    }
                  </div>
                </div>
                {error.password && <p className='text-red-500 text-xs'>{error.password}</p>}
              </div>
              {notUser && <div className='grid gap-2 w-full'>
                <label className='font-semibold'> Confirm password</label>
                <div className='border-gray-200 border pl-2 flex items-center'>
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type={viewPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='p-2 w-full outline-none ' placeholder='Confirm password' />
                </div>
                {error.confirmPassword && <p className='text-red-500 text-xs'>{error.confirmPassword}</p>}
              </div>}
              <div className='flex place-content-center'>
                <button
                  type='submit'
                  className='xl:w-full w-6/12  bg-[#1B1F3B] p-1 rounded-lg text-white cursor-pointer hover:text-gray-200' >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
