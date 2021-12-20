import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import routeMain from "./routes";

import { useSelector } from "react-redux";
import { selectList } from "store/films/selectors";

import "./styles.scss";
import { ID } from "types/ID";
import { IFilmsDetail } from "types/IFilmsDetail";

const FilmDetailPage = () => {
  const { id } = useParams<ID>();
  const [films, setFilms] = useState<IFilmsDetail | undefined>(undefined);

  const filmsList = useSelector(selectList);

  useEffect(() => {
    const currentFilms = filmsList?.find(
      (item: IFilmsDetail) => item.show.id === id
    );
    setFilms(currentFilms);
  }, [id, filmsList]);

  return (
    <section className="filmsDetailPage">
      {films ? (
        <div className="newsDetailWrapper">
          <div className="leftPart">
            <h2 className="title">{films.show.name}</h2>
            <p className="source">{films.show.name}</p>
          </div>
          <div className="rightPart">
            <img src={films.show.name} alt={films.show.name} />
            <p className="summary">{films.show.premiered}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
export { routeMain };
export default FilmDetailPage;
