import React from "react";

import FilmsItem from "./FilmsItem";

import { IFilmsDetail } from "types/IFilmsDetail";

import "./styles.scss";

interface IFilmsListParams {
  list: IFilmsDetail[];
}

const FilmList: React.FC<IFilmsListParams> = ({ list }) => (
  <div className="filmsList">
    {list.map((films: IFilmsDetail) => (
      <FilmsItem key={films.show.id} item={films} />
    ))}
  </div>
);

export default FilmList;
