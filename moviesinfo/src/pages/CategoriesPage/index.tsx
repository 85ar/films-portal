import React, { useEffect } from "react";

import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "store/films/actions";
import { selectList } from "store/films/selectors";

import "./styles.scss";
import FilmList from "components/FilmList/components";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const filmsList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilms());
  }, [dispatch]);

  return (
    <section className="filmsListPage">
      {filmsList.length > 0 && <FilmList list={filmsList} />}
    </section>
  );
};

export { routeMain };
export default CategoriesPage;
