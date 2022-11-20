import React from 'react'
import Account from './components/Account'
import LogIn from './components/LogIn'
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'

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
            <Route path="/account" element={<Account />} />
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App
