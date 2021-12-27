import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeFilmsDetail } from "pages/FilmDetailPage";

import { IFilmsDetail } from "types/IFilmsDetail";

import "./styles.scss";

interface ISearchItemParams {
  item: IFilmsDetail;
}

const SearchItem: React.FC<ISearchItemParams> = ({ item }) => (
  <NavLink className="categoryCardItem" to={routeFilmsDetail(item.id)}>
    <div className="categoryCard">
      <div className="categoryCard__left">
        <img
          className="categoryCard__image"
          src={`${item.image?.medium}`}
          alt={item.name}
        />
      </div>
      <div className="categoryCard__right">
        <div className="categoryCard__title">{item.name}</div>
        <div className="categoryCard__genres">{item.genres.join(", ")}</div>
      </div>
    </div>
  </NavLink>
);

export default SearchItem;
