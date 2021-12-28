import React from "react";

import { NavLink } from "react-router-dom";
import { routeMain as routeFilmsDetail } from "pages/FilmDetailPage";

import { IFilmsDetail } from "types/IFilmsDetail";

import "./styles.scss";

interface ISearchItemParams {
  item: IFilmsDetail;
}

const SearchItem: React.FC<ISearchItemParams> = ({ item }) => (
  <NavLink className="searchCardItem" to={routeFilmsDetail(item.id)}>
    <div className="searchCard">
      <div className="searchCard__left">
        <img
          className="searchCard__image"
          src={`${item.image?.medium}`}
          alt={item.name}
        />
      </div>
      <div className="searchCard__right">
        <div className="searchCard__title">{item.name}</div>
        <div className="searchCard__genres">{item.genres.join(", ")}</div>
      </div>
    </div>
  </NavLink>
);

export default SearchItem;
