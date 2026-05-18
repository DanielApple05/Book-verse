import { useState } from 'react';
import Index from './assets/pages/index';
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
<div>
    <Routes>
      <Route path="/" element={<Index />} />
      
    </Routes>
</div>

  )
}

export default App
