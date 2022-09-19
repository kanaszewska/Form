import React from 'react';
import Form from './Form';
import { BrowserRouter as Router, Routes, NavLink, Route } from 'react-router-dom';
import './App.css'
import Registration from './Registration';

function App() {
  return (
    <Router>
    <div className="app">
      <div className='nav'>
        <nav>
          <ul className='nav'>
            <li><NavLink to="">LOG IN</NavLink></li>
            <li><NavLink to="/registration">SIGN UP</NavLink></li>
          </ul>
        </nav>
      </div>
      <section className='route'>
      <Routes>
          <Route path="" element={<Form/>} />
          <Route path="/registration" element={<Registration/>} />
       </Routes>
      </section>
    </div>
    </Router>
  );
}

export default App;
