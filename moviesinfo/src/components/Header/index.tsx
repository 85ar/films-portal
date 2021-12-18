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
        <div className="headerWrapper">
          <div className="logo">
            <LogoIcon />
          </div>
          <nav>
            <NavLink to={routeMainPage} activeClassName="linkActive">
              Главная
            </NavLink>
            <NavLink to={routeCategoriesPage} activeClassName="linkActive">
              Фильмы по категории
            </NavLink>
            <NavLink to={routeAboutPage} activeClassName="linkActive">
              О нас
            </NavLink>
            <NavLink to={routeSearchPage} activeClassName="linkActive">
              Поиск
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
