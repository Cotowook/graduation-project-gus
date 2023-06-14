import React, { useState } from "react";
import "./Header.css";
import logo from "./img/mainlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "PERSONAL", path: "/Personal" },
  ];

  return (
    <div className="top-banner">
      <span className="banner">
        <Link to="/">
          <div>
            <img className="bannerLogo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="banner_btnItems">
          <div className="left-buttons">
            {buttonData.map((button) => (
              <button
                className="bannerBtn"
                key={button.path}
                onClick={() => navigateTo(button.path)}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className="right-buttons">
            <div className="searchForm">
              <input className="inputForm" placeholder="무엇이 궁금하세요?" />
              <button className="searchBtn">
                <FiSearch />
              </button>
            </div>
            {isLoggedIn ? (
              <button>LOG OUT</button>
            ) : (
              <React.Fragment>
                <button
                  className="bannerBtn"
                  onClick={() => navigateTo("/SignUp")}
                >
                  SIGN UP
                </button>
                <button
                  className="bannerBtn"
                  onClick={() => navigateTo("/LogIn")}
                >
                  LOG IN
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </span>
    </div>
  );
}