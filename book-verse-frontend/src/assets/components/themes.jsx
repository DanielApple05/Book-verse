import React from 'react';
import { useTheme } from '../../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';


const Themes = () => {
  const { darkMode, toggleDarkMode, autoDarkMode, toggleAutoDarkMode } = useTheme();
  const themes = ['Light', 'Dark'];
  return (
    <div className='border border-slate-200 dark:border-slate-700 mx-auto rounded p-2 mt-5 bg-slate-50 dark:bg-slate-800 shadow-2xl transition-colors duration-200'>
      <p className='font-bold  border-b border-b-gray-200 pb-2 mb-5'>Preferences</p>
      <div className='border border-slate-200 dark:border-slate-700 mx-auto rounded-lg flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-colors duration-200 mb-3'>
        <div>
          <p className='font-semibold mb-2'> Theme</p>
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
              className={`p-2 rounded-xl m-2 border-2 border-slate-800  hover:text-white font-semibold hover:bg-[#E8834A] cursor-pointer ${(theme === 'Dark' && darkMode) || (theme === 'Light' && !darkMode)
                ? 'bg-slate-800 text-white'
                : ''
                }`}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>
      <div className='border border-slate-200 dark:border-slate-700 mx-auto rounded-lg flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-colors duration-200 mb-2'>
        <div>
          <p className='font-semibold mb-2'>Auto Dark Mode </p>
          <p className='text-xs'> Switch to dark mode at night </p>
        </div>
        <div>
          <FontAwesomeIcon icon={autoDarkMode ? faToggleOn : faToggleOff}
            className='text-3xl cursor-pointer text-slate-500 dark:text-slate-400 '
            onClick={toggleAutoDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Themes;
