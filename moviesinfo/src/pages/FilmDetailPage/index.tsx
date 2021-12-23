import React, { useEffect } from "react";
import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadFilmDetail } from "store/filmDetail/actions";
import { selectList } from "store/filmDetail/selectors";

import "./styles.scss";

import FilmsItem from "components/FilmList/components/FilmsItem";

const FilmDetailPage = () => {
  const dispatch = useDispatch();
  const filmDetail = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilmDetail(id));
  }, [dispatch]);

  return (
    <section className="mainPage">
      {filmDetail.length > 0 && <FilmsItem item={filmDetail} />}
    </section>
  );
};

export { routeMain };
export default FilmDetailPage;
