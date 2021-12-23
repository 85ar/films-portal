import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeFilmsDetail } from "pages/FilmDetailPage";

import { IFilmsDetail } from "types/IFilmsDetail";

import "./styles.scss";

interface IFilmsItemParams {
  item: IFilmsDetail;
}

const FilmsItem: React.FC<IFilmsItemParams> = ({ item }) => (
  <NavLink className="filmsItem" to={routeFilmsDetail(item.id)}>
    <div className="filmsCard card">
      <img
        className="card__image"
        src={`${item.image?.medium}`}
        alt={item.name}
      />
      <span>{item.name}</span>
      <span>{item.premiered}</span>
    </div>
  </NavLink>
);

export default FilmsItem;
