import { useState } from 'react';
import Index from './assets/pages/index';
import { Routes, Route } from 'react-router-dom';
import SignIn from './assets/pages/login';
import Home from './assets/pages/home';
import Library from './assets/pages/library';
import Category from './assets/pages/category';
import Discovery from './assets/pages/discovery';
import BookDetail from './assets/pages/bookDetail';

function App() {
  
  return (
<div>
    <Routes>
      <Route path="/" element={<Index />} />
       <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library/ >} />
        <Route path="/category" element={<Category/ >} />
        <Route path="/discovery" element={<Discovery/ >} />
        <Route path="/book/:id" element={<BookDetail />} />
    </Routes>
</div>

  )
}

export default App
