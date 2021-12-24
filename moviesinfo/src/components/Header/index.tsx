import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeCategoriesPage } from "pages/CategoriesPage";
import { routeMain as routeSearchPage } from "pages/SearchPage";
import { routeMain as routeAboutPage } from "pages/AboutPage";

import { ReactComponent as LogoIcon } from "assets/img/Logo.svg";

import "./styles.scss";

const Header = () => {
  return (
    <header className="mainHeader">
      <div className="container">
        <div className="headerWrapper header">
          <NavLink to={routeMainPage}>
            <div className="header__logo">
              <LogoIcon />
            </div>
          </NavLink>

          <nav className="header__nav">
            <NavLink
              className="header__link"
              to={routeMainPage}
              activeClassName="linkActive"
            >
              Главная
            </NavLink>
            <NavLink
              className="header__link"
              to={routeCategoriesPage}
              activeClassName="linkActive"
            >
              Фильмы по категории
            </NavLink>
            <NavLink
              className="header__link"
              to={routeAboutPage}
              activeClassName="linkActive"
            >
              О нас
            </NavLink>
            <NavLink
              className="header__link"
              to={routeSearchPage}
              activeClassName="linkActive"
            >
              Поиск
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
