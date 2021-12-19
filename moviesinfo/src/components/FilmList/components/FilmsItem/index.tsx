import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeFilmsDetail } from "pages/FilmDetailPage";

// import FilmsItem from "./FilmsItem";

import { IFilmsDetail } from "types/IFilmsDetail";

import "./styles.scss";

interface IFilmsItemParams {
  item: IFilmsDetail;
}

const FilmsItem: React.FC<IFilmsItemParams> = ({ item }) => (
  <NavLink className="filmsItem" to={routeFilmsDetail(item.id)}>
    <div className="name">{item.name}</div>
    <div className="bottomWrapper">
      <p className="source">{item.premiered}</p>
    </div>
  </NavLink>
);

export default FilmsItem;
