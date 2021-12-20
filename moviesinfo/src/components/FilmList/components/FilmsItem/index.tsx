import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeFilmsDetail } from "pages/FilmDetailPage";

import { IFilmsDetail } from "types/IFilmsDetail";

import "./styles.scss";

interface IFilmsItemParams {
  item: IFilmsDetail;
}

const FilmsItem: React.FC<IFilmsItemParams> = ({ item }) => (
  <NavLink className="filmsItem" to={routeFilmsDetail(item.show.id)}>
    {/* <div className="filmsCard card"> */}
    <img className="card__img" src="" alt="" />
    {/* <img src={ArturImg} alt={ArturImg} /> */}
    <span className="card__title">{item.show.name}</span>
    <div className="card__block">
      <span className="card__year">{item.show.premiered}</span>
      {/* <span className="card__country">{item.show.network.country}</span> */}
    </div>
    <span className="card__genres">{item.show.genres}</span>
    {/* </div> */}
  </NavLink>
);

export default FilmsItem;
