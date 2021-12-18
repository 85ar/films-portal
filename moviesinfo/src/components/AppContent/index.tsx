import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";

import { Route, Switch, Redirect } from "react-router-dom";

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import CategoriesPage, {
  routeMain as routeCategoriesPage,
} from "pages/CategoriesPage";
import FilmDetailPage, {
  routeMain as routeFilmDetailPage,
} from "pages/FilmDetailPage";
import SearchPage, { routeMain as routeSearchPage } from "pages/SearchPage";
import AboutPage, { routeMain as routeAboutPage } from "pages/AboutPage";

import "./styles.scss";

const AppContent = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage} />
          <Route
            exact
            path={routeCategoriesPage()}
            component={CategoriesPage}
          />
          <Route
            exact
            path={routeFilmDetailPage()}
            component={FilmDetailPage}
          />
          <Route exact path={routeSearchPage()} component={SearchPage} />
          <Route exact path={routeAboutPage()} component={AboutPage} />
          <Redirect
            to={{
              pathname: routeMainPage(),
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;
