import React from 'react'
import LogIn from './LogIn'
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom'
import './App.css'
import SignUp from './SignUp'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <nav>
            <ul className="nav">
              <li>
                <NavLink to="/Form">LOG IN</NavLink>
              </li>
              <li>
                <NavLink to="/registration">SIGN UP</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <section className="route">
          <Routes>
            <Route path="/Form" element={<LogIn />} />
            <Route path="/registration" element={<SignUp />} />
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App
