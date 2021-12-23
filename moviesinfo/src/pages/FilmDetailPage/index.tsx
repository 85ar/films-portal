import React, { useEffect } from "react";
import routeMain from "./routes";

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
    <section className="mainPage">
      {filmDetail ? (
        <div className="newsDetailWrapper">
          <h2 className="title">{filmDetail.name}</h2>
          <p className="source">{filmDetail.premiered}</p>
          <p className="summary">{filmDetail.summary}</p>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export { routeMain };
export default FilmDetailPage;
