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
      <div className="card__title">{item.name}</div>
      <div className="card__yearCountry">
        <span className="card__year">{item.premiered?.substring(0, 4)}</span>
        <span className="card__country">({item.network?.country.name})</span>
      </div>
      <div className="card__genres">{item.genres.join(", ")}</div>
    </div>
  </NavLink>
);

export default FilmsItem;
