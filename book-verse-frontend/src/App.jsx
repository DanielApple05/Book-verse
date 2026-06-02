import { useState } from 'react';
import Index from './assets/pages/index';
import { Routes, Route } from 'react-router-dom';
import SignIn from './assets/pages/login';
import Home from './assets/pages/home';
import Library from './assets/pages/library';
import Category from './assets/pages/category';
import Discovery from './assets/pages/discovery';
import BookDetail from './assets/pages/bookDetail';
import SearchResults from './assets/pages/searchResults';
import ReadBook from './assets/pages/readBook';
import Settings from './assets/pages/settings'
import { useTheme } from './context/themeContext';


function App() {
  
  return (
<div className="min-h-screen dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
    <Routes>
      <Route path="/" element={<Index />} />
       <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library/ >} />
        <Route path="/category" element={<Category/ >} />
         <Route path="/category/:tab" element={<Category />} />
        <Route path="/discovery" element={<Discovery/ >} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path='/read/:id' element={<ReadBook />} />
        <Route path='/settings' element={<Settings />} />
    </Routes>
</div>

  )
}

export default App
