import React, { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilmAction } from "store/searchFilm/actions";
import { selectList } from "store/searchFilm/selectors";

import routeMain from "./routes";

import InputBlock from "components/InputBlock";
import ButtonInput from "components/ButtonInput";
import startSearchFilm from "services/startSearchFilm";

import "./styles.scss";

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchFilm = useSelector(selectList);

  const [value, setValue] = useState<string>("");

  useEffect(() => {
    dispatch(setSearchFilmAction(value));
  }, [dispatch, value]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleChange = () => {
    startSearchFilm(value);
  };
  return (
    <section className="mainSearch">
      <div className="container">
        <div className="searchWrapper search">
          <div className="search__title">
            Поиск по категории (раздел в разработке)
          </div>
          <InputBlock onChange={onChange} />
          <ButtonInput handleChange={handleChange} />
          <div className="search__info">Результаты поиска:</div>
          <div className="search__result">{searchFilm}</div>
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default SearchPage;
