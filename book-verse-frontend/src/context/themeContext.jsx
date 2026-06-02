import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' || false);
  const [autoDarkMode, setAutoDarkMode] = useState(localStorage.getItem('autoDarkMode') === 'true' || false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleAutoDarkMode = () => setAutoDarkMode(prev => !prev);


  useEffect(() => {
    if (!autoDarkMode) return;

    const checkTime = () => {
      const hour = new Date().getHours();
  
      if (hour >= 19 || hour < 6) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); 

    return () => clearInterval(interval); 
  }, [autoDarkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  localStorage.setItem('darkMode', darkMode);
  localStorage.setItem('autoDarkMode', autoDarkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, autoDarkMode, toggleAutoDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);