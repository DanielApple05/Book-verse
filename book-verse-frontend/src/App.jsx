import { useState } from 'react';
import Index from './assets/pages/index';
import { Routes, Route } from 'react-router-dom';
import SignIn from './assets/pages/login';
import Home from './assets/pages/home';
import Library from './assets/pages/library'

function App() {
  

  return (
<div>
    <Routes>
      <Route path="/" element={<Index />} />
       <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library/ >} />
    </Routes>
</div>

  )
}

export default App
