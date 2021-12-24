import React, { useEffect } from "react";

import routeMain from "./routes";

import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "store/films/actions";
import { selectList } from "store/films/selectors";

import "./styles.scss";
import { IFilms } from "types/IFilms";

import CategoryList from "components/CategoryList";

interface ICategoryPage {
  list: IFilms[];
}

const CategoriesPage: React.FC<ICategoryPage> = ({ list }) => {
  const dispatch = useDispatch();
  const filmsList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadFilms());
  }, [dispatch]);

  return (
    <section className="categoryPageMain">
      <div className="container">
        <div className="categoryPageWrapper categoryPage">
          <div className="categoryPage__title">
            Выбранная категория:
            <span className="categoryPage__category"> robot</span>
          </div>
          {filmsList.length > 0 && <CategoryList list={filmsList} />}
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default CategoriesPage;
