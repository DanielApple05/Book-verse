import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Search from '../search';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import { jwtDecode } from 'jwt-decode';
import { useTheme } from '../../../context/themeContext';

const Header = () => {
  const token = localStorage.getItem('token');
  const isValidToken = token && token !== 'undefined' && token.split('.').length === 3;
  let user = null;
  try {
    if (isValidToken) {
      user = jwtDecode(token);
    }
  } catch (err) {
    console.error('Invalid token');
  }
  const firstLetter = user?.username?.charAt(0).toUpperCase();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
  <div className={`flex items-center justify-between p-4 border-b xl:text-2xl text-sm border-gray-200 w-full fixed top-0 z-50 backdrop-blur-md  text-black transition-colors duration-300 ${darkMode ? 'bg-gray-950/80 dark: text-white' : 'bg-white/80'}`} >
      <Logo />
      <div className='xl:flex hidden w-5/6 justify-center'>
        <Search />
      </div>
      <div className='flex items-center gap-7'>
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          onClick={toggleDarkMode}
          className={`cursor-pointer text-[#1A1A2E] text-2xl  ${darkMode ? 'text-white' : 'text-black'}`}
        />
        {user ? (
          <span className='w-8 h-8 bg-[#E8834A] text-xl rounded-full text-center font-semibold flex items-center justify-center'>
            {firstLetter}
          </span>
        ) : (
          <Link to='/signin'>
            <FontAwesomeIcon icon={faCircleUser} className='cursor-pointer text-[#1A1A2E] dark:text-white text-2xl' />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
