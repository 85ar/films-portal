import React from "react";
import { NavLink } from "react-router-dom";
import { IFilmsDetail } from "types/IFilmsDetail";
import { routeMain as routeFilmsDetail } from "pages/FilmDetailPage";
import "./styles.scss";

interface ICategoryCard {
  item: IFilmsDetail;
}

const CategoryCard: React.FC<ICategoryCard> = ({ item }) => (
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

export default CategoryCard;
