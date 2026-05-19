import { useState } from 'react';
import Index from './assets/pages/index';
import { Routes, Route } from 'react-router-dom'
import SignIn from './assets/pages/login'
import Home from './assets/pages/home'

function App() {
  

  return (
<div>
    <Routes>
      <Route path="/" element={<Index />} />
       <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
    </Routes>
</div>

  )
}

export default App
