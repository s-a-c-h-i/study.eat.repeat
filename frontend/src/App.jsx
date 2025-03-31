import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/homepage';
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App; // Ensure default export
