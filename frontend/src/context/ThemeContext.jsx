import { useState, useEffect } from 'react';
import { ThemeContext } from './contexts';

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log('Initial theme from localStorage:', savedTheme);
    return savedTheme === 'dark';
  });

  useEffect(() => {
    console.log('Applying theme, isDarkMode:', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    console.log('Document classList:', document.documentElement.classList);
  }, [isDarkMode]);

  const toggleTheme = () => {
    console.log('Toggling theme, current state:', isDarkMode);
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}