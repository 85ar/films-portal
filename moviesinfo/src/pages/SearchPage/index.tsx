import React, { useState } from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchFilm } from "store/searchFilm/actions";
import { selectList } from "store/searchFilm/selectors";
import { routeMain as routeFilmsDetail } from "pages/FilmDetailPage";
import routeMain from "./routes";

import InputBlock from "components/InputBlock";
import ButtonInput from "components/ButtonInput";
import startSearchFilm from "services/startSearchFilm";

import "./styles.scss";

import { NavLink } from "react-router-dom";
import { IFilmsDetail } from "types/IFilmsDetail";

interface ISearchPage {
  item: IFilmsDetail;
}

const SearchPage: React.FC<ISearchPage> = ({ item }) => {
  const dispatch = useDispatch();
  const searchFilm = useSelector(selectList);

  const [value, setValue] = useState<string>("");

  useEffect(() => {
    dispatch(loadSearchFilm(value));
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
          <div>
            {searchFilm ? (
              <div>
                <NavLink
                  className="categoryCardItem"
                  to={routeFilmsDetail(item.id)}
                >
                  <div className="categoryCard">
                    <div className="categoryCard__left">
                      <img
                        className="categoryCard__image"
                        src={`${item.image?.medium}`}
                        alt={item.name}
                      />
                    </div>
                    <div className="categoryCard__right">
                      <div className="categoryCard__title">{item.name}</div>
                      <div className="categoryCard__genres">
                        {item.genres.join(", ")}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default SearchPage;
