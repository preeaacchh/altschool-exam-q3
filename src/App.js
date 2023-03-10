import React, { useState } from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Email from "./pages/Email";
import Phone from "./pages/Phone";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  let activeClassname = "nav-active";

  // configuring user login
  let [loggedIn, setLoggedIn] = useState(null);

  function handleLogin() {
    setLoggedIn(true);
  }
  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <header>
        <h1>AltSchool Exam Question 3</h1>
      </header>
      <nav className="nav-bar">
        <NavLink
          to=""
          className={({ isActive }) => isActive && activeClassname} style={{ textDecoration: 'none' }}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => isActive && activeClassname} style={{ textDecoration: 'none' }}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => isActive && activeClassname} style={{ textDecoration: 'none' }}
        >
          Contact
        </NavLink>
        <NavLink
          to="dashboard"
          className={({ isActive }) => isActive && activeClassname} style={{ textDecoration: 'none' }}
        >
          Dashboard
        </NavLink>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to={"/dashboard"} />
            ) : (
              <Home login={handleLogin} />
            )
          }
        ></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}>
          <Route path="email" element={<Email />} />
          <Route path="phone" element={<Phone />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
        <Route
          path="dashboard"
          element={<Navigate to={<Dashboard />} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
