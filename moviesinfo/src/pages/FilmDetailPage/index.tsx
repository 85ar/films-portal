import React, { useEffect } from "react";
import routeMain from "./routes";

import star from "assets/img/star.png";

import { useDispatch, useSelector } from "react-redux";
import { loadFilmDetail } from "store/filmDetail/actions";
import { selectList } from "store/filmDetail/selectors";

import { useParams } from "react-router-dom";
import { ID } from "types/ID";

import "./styles.scss";

const FilmDetailPage = () => {
  const { id } = useParams<ID>();

  const dispatch = useDispatch();
  const filmDetail = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilmDetail(id));
  }, [dispatch, id]);

  return (
    <section className="mainFilmDetail">
      <div className="container">
        <div className="detailFilmWrapper">
          {filmDetail ? (
            <div className="newsDetailWrapper detailFilm">
              <div className="detailFilm__left">
                <img
                  className="detailFilm__img"
                  src={`${filmDetail.image?.original}`}
                  alt={filmDetail.name}
                />
              </div>
              <div className="detailFilm__right">
                <div className="detailFilm__name">
                  <div className="detailFilm__title">{filmDetail.name}</div>
                  <div className="detailFilm__rating">
                    <img className="detailFilm__star" src={star} alt={star} />
                    <span className="detailFilm__rate">
                      {filmDetail.rating.average}/10
                    </span>
                  </div>
                </div>
                <div className="detailFilm__info">
                  <ul className="detailFilm__listLeft">
                    <li className="detailFilm__item">Год выхода:</li>
                    <li className="detailFilm__item">Страна:</li>
                    <li className="detailFilm__item">Жанр:</li>
                    <li className="detailFilm__item">Описание:</li>
                  </ul>
                  <ul className="detailFilm__listRight">
                    <li className="detailFilm__text">
                      {filmDetail.premiered?.substring(0, 4)}
                    </li>
                    <li className="detailFilm__text">
                      {filmDetail.network?.country.name}
                    </li>
                    <li className="detailFilm__text">
                      {filmDetail.genres.join(", ")}
                    </li>
                    <li className="detailFilm__text">
                      {filmDetail.summary?.replace(/(<([^>]+)>)/gi, "")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default FilmDetailPage;
