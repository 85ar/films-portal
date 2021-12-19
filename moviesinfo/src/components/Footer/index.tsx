import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as routeMainPage } from "pages/MainPage";
import { ReactComponent as LogoIcon } from "assets/img/Logo.svg";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="container">
        <div className="footerWrapper footer">
          <NavLink className="footer__logo" to={routeMainPage}>
            <LogoIcon />
          </NavLink>
          <span className="footer__title">Дипломный проект</span>
          <div className="footer__made">
            <span className="footer__text">Made by</span>
            <span className="footer__name">Валеев Артур</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
