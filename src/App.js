import React from "react";
import Account from "./components/Account";
import LogIn from "./components/LogIn";
import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import { useCookies } from "react-cookie";
import { useState } from "react";

const App = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [flag, setFlag] = useState(true);

  if (cookies.users == null) {
    setCookie("users", []);
  }

  const handleCookie = () => {
    setCookie("user", flag, {
      path: "/",
    });
    setFlag(true);
  };

  return (
    <Router>
      <div className="app">
        <div className="nav">
          <nav>
            <ul className="nav">
              <li>
                {flag ? (
                  <NavLink to="/Form">LOG IN</NavLink>
                ) : (
                  <NavLink onClick={handleCookie} to="/Form">
                    LOG OUT
                  </NavLink>
                )}
              </li>
              <li>
                {flag ? (
                  <NavLink to="/registration" onClick={handleCookie}>
                    SIGN UP
                  </NavLink>
                ) : null}
              </li>
            </ul>
          </nav>
        </div>
        <section className="route">
          <Routes>
            <Route path="/Form" element={<LogIn changeFlag={setFlag} />} />
            <Route path="/registration" element={<SignUp />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
