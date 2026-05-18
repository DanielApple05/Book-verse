import { useState } from 'react';
import Index from './assets/pages/index';
import { Routes, Route } from 'react-router-dom'
import SignIn from './assets/pages/login'

function App() {
  

  return (
<div>
    <Routes>
      <Route path="/" element={<Index />} />
       <Route path="/signIn" element={<SignIn />} />
    </Routes>
</div>

  )
}

export default App
