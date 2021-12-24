import React from "react";

import FilmsItem from "./FilmsItem";

import { IFilms } from "types/IFilms";

import "./styles.scss";

interface IFilmsListParams {
  list: IFilms[];
}

const FilmList: React.FC<IFilmsListParams> = ({ list }) => (
  <div className="filmsList">
    {list.map((films: IFilms) => (
      <FilmsItem key={films.show.id} item={films.show} />
    ))}
  </div>
);

export default FilmList;
