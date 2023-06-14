import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function MyPage() {
  return (
    <div>
      <Link to="/">
        <div className="banner">
          <img
            className="bannerLogo"
            src={logo}
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>
      </Link>
    </div>
  );
}