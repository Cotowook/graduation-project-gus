import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/mainlogo.jpg";
import ImageSlider from "./ImageSlide";
import about_hl from "./img/about_hl.png";
import midBanner from "./img/banner.jpeg";
import logo_mean_left from "./img/logo_mean_left.jpeg";
import logo_mean_right from "./img/logo_mean_right.jpeg";
import "./Header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 로그인 처리 로직을 구현합니다.
    // 성공적으로 로그인되었다면 setIsLoggedIn(true)로 상태를 변경합니다.
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직을 구현합니다.
    // 로그아웃되었다면 setIsLoggedIn(false)로 상태를 변경합니다.
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "TODO LIST", path: "/Todos" },
  ];

  const [leftLogoVisible, setLeftLogoVisible] = useState(false);
  const [rightLogoVisible, setRightLogoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const leftLogo = document.querySelector(".logo_mean_left");
      const rightLogo = document.querySelector(".logo_mean_right");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (leftLogo) {
        const logoMeanLeftOffset = leftLogo.offsetTop;
        if (scrollPosition > logoMeanLeftOffset - windowHeight + 100) {
          setLeftLogoVisible(true);
        } else {
          setLeftLogoVisible(false);
        }
      }

      if (rightLogo) {
        const logoMeanRightOffset = rightLogo.offsetTop;
        if (scrollPosition > logoMeanRightOffset - windowHeight + 100) {
          setRightLogoVisible(true);
        } else {
          setRightLogoVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top_banner">
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
      <ImageSlider />
      <img className="about_hl" src={about_hl} alt="about_hl" />
      <img className="mid_banner" src={midBanner} alt="mid_banner" />
      <div className="logos">
        <img
          className={`logo_mean_left ${leftLogoVisible ? "visible" : ""}`}
          src={logo_mean_left}
          alt="logo_meaning_left"
        />
        <img
          className={`logo_mean_right ${rightLogoVisible ? "visible" : ""}`}
          src={logo_mean_right}
          alt="logo_meaning_right"
        />
      </div>
    </div>
  );
};

export default Header;