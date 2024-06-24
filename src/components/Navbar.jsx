import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"; // Assuming your CSS file path
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  useEffect(() => {
    // Check login status from session storage or API (adjust based on your implementation)
    const storedUser = localStorage.getItem("user"); // Example using localStorage
    setIsLoggedIn(!!storedUser);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pameran"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Pameran
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Tentang Kami
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/riwayat-pemesanan"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Riwayat Pemesanan
          </NavLink>
        </li>
        {isLoggedIn ? (
          <li className="profile-dropdown">
            <button onClick={handleDropdownToggle}>
              Profil {isDropdownOpen && <span>&#9660;</span>}{" "}
              {/* Down arrow icon */}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                {/* Add dropdown menu items here */}
                <li>
                  <NavLink to="/profile">Lihat Profil</NavLink>
                </li>
                <li>
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            )}
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/register">
                <button className="btn-primary">Daftar</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button className="btn-secondary">Masuk</button>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
