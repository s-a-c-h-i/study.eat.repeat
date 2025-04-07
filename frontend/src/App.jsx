import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/homepage';
 import Redemption from './pages/redemption';
import Pomodoro from './pages/Pomodoro';
 import Leader from './pages/Leadership';
 import Courses from './pages/Courses';
 import Chapters from './pages/Chapters';
 const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/leadership" element={<Leader />} />
         <Route path="/courses" element={<Courses />} />
         <Route path="/chapters" element={<Chapters />} />

         <Route path="/pomodoro" element={<Pomodoro />} />
         <Route path="/redemption" element={<Redemption totalPoints={350} />} />
         {/* <Route path="/login" element={<SignIn/>}/>
         <Route path="/signup" element={<SignUp/>}/> */}

       </Routes>
    </BrowserRouter>
 
  );
};

export default App; // Ensure default export
