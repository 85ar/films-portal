import MainTitle from "components/MainTitle";
import React, { useEffect } from "react";
import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "store/films/actions";
import { selectList } from "store/films/selectors";

import "./styles.scss";
import FilmList from "components/FilmList/components";

const MainPage = () => {
  const dispatch = useDispatch();
  const filmsList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilms());
  }, [dispatch]);

  return (
    <section className="mainPage">
      <MainTitle />
      {filmsList.length > 0 && <FilmList list={filmsList.slice(0, 8)} />}
    </section>
  );
};

export { routeMain };
export default MainPage;
