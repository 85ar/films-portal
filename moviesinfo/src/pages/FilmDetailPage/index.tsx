import React, { useEffect } from "react";
import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadFilmDetail } from "store/filmDetail/actions";
import { selectList } from "store/filmDetail/selectors";

import "./styles.scss";

import FilmsItem from "components/FilmList/components/FilmsItem";
import { useParams } from "react-router-dom";
import { ID } from "types/ID";

const FilmDetailPage = () => {
  const { id } = useParams<ID>();

  const dispatch = useDispatch();
  const filmDetail = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilmDetail(id));
  }, [dispatch, id]);

  return (
    <section className="mainPage">
      {filmDetail && <FilmsItem item={filmDetail} />}
    </section>
  );
};

export { routeMain };
export default FilmDetailPage;
