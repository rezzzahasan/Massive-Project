import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/pameran" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Pameran
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Tentang Kami
          </NavLink>
        </li>
        <li className="sign">
          <NavLink 
            to="/register" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            <button className="btn-primary">Daftar</button>
          </NavLink>
        </li>
        <li className="sign">
          <NavLink 
            to="/login" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            <button className="btn-secondary">Masuk</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
