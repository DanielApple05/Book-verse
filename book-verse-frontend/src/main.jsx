import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext';
import { LibraryProvider } from './context/libraryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      < LibraryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </LibraryProvider>
    </ThemeProvider>
  </StrictMode>
)