import React from 'react';
import { useTheme } from '../../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';


const Themes = () => {
  const { darkMode, toggleDarkMode, autoDarkMode, toggleAutoDarkMode } = useTheme();
  const themes = ['Light', 'Dark'];
  return (
    <div className='bg-white dark:bg-gray-800 rounded p-3 w-full space-y-3 shadow-xl mx-auto mt-5 '>
      <p className='font-bold  border-b border-b-gray-200 pb-2'>Preferences</p>
      <div className='flex items-center justify-between gap-4 border-b border-b-gray-200 mx-auto rounded-lg p-2 bg-orange-300 shadow-2xl'>
        <div>
          <p className='font-semibold'> Theme</p>
          <p className='text-xs'> Choose your preferred theme</p>
        </div>
        <div className='text-sm'>
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => {
                if (theme === 'Dark' && !darkMode) toggleDarkMode();
                if (theme === 'Light' && darkMode) toggleDarkMode();
              }}
              className={`p-1 rounded-xl m-2 border-2 border-[#f3b795] hover:text-white font-semibold hover:bg-[#E8834A] cursor-pointer ${(theme === 'Dark' && darkMode) || (theme === 'Light' && !darkMode)
                ? 'bg-[#E8834A] text-white'
                : ''
                }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-between gap-4 mx-auto rounded-lg p-2 bg-orange-300 shadow-2xl '>
        <div>
          <p className='font-semibold'>Auto Dark Mode </p>
          <p className='text-xs'> Switch to dark mode at night </p>
        </div>
        <div>
          <FontAwesomeIcon icon={autoDarkMode ? faToggleOn : faToggleOff}
            className='text-3xl cursor-pointer text-[#E8834A] '
            onClick={toggleAutoDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Themes;
