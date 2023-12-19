import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Logos/Logo.png";
import useHeader from '../Header/Hooks/useHeader.jsx';

export default function Footer() {

  const isVisibleHeader = useHeader();

  return (
    <div>
      {isVisibleHeader && (
        <div className="px-3 px-lg-5 footer d-flex justify-content-between align-items-center py-2">
          <div className="footer-logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="footer-link-wrapper-container">
            <a href="#" target="_blank">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
