import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchFilm } from "store/searchFilm/actions";
import { selectList } from "store/searchFilm/selectors";
import routeMain from "./routes";
import InputBlock from "components/InputBlock";
import ButtonInput from "components/ButtonInput";

import { IFilms } from "types/IFilms";
import SearchList from "components/SearchList";
import "./styles.scss";

interface ISearchPage {
  item: IFilms[];
}

const SearchPage: React.FC<ISearchPage> = ({ item }) => {
  const dispatch = useDispatch();
  const searchFilm = useSelector(selectList);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(loadSearchFilm(event.target.value));
  };

  const handleReset = () => {
    dispatch(loadSearchFilm(""));
  };

  return (
    <section className="mainSearch">
      <div className="container">
        <div className="searchWrapper search">
          <div className="search__title">Поиск по категории</div>
          <InputBlock onChange={onChange} />
          <ButtonInput handleChange={handleReset} />
          <div className="search__info">Результаты поиска:</div>
          {searchFilm ? (
            <SearchList item={searchFilm} />
          ) : (
            <p className="search__error">
              Введите поисковый запрос для отображения информации
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default SearchPage;
