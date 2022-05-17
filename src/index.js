import React from 'react';
import ReactDOM from 'react-dom/client';
import AppCon from './components/App';
import Exercises from './components/Exercises';
import Pro from './components/Pro';
import References from './components/References';
import Tutorials from './components/Tutorials';
import Videos from './components/Videos';
import Website from './components/Website';

import './index.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Paid_Courses from './components/Paid_Courses';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppCon />} />
 
      <Route path='/Exercises' element={<Exercises />} />
      <Route path='/Pro' element={<Pro />} />
      <Route path='/References' element={<References />} />
      <Route path='/Tutorials' element={<Tutorials />} />
      <Route path='/Videos' element={<Videos />} />
      <Route path='/Website' element={<Website />} />
      <Route path='/Paid_Courses' element={<Paid_Courses />} />

    </Routes>
  </BrowserRouter>



);


