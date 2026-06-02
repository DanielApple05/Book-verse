import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [autoDarkMode, setAutoDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleAutoDarkMode = () => setAutoDarkMode(prev => !prev);

  // auto dark mode based on time
  useEffect(() => {
    if (!autoDarkMode) return;

    const checkTime = () => {
      const hour = new Date().getHours();
      // dark mode between 7pm (19) and 6am (6)
      if (hour >= 19 || hour < 6) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    checkTime(); // run immediately
    const interval = setInterval(checkTime, 60000); // check every minute

    return () => clearInterval(interval); // cleanup
  }, [autoDarkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, autoDarkMode, toggleAutoDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);