import React from "react";
import InputBlock from "./components/InputBlock";
import routeMain from "./routes";

import "./styles.scss";

const SearchPage = () => {
  return (
    <section className="mainSearch">
      <div className="container">
        <div className="searchWrapper search">
          <div className="search__title">
            Поиск по категории (раздел в разработке)
          </div>
          <InputBlock />
          <div className="search__info">Результаты поиска:</div>
          <div className="search__result">Карточки</div>
        </div>
      </div>
    </section>
  );
};

export { routeMain };
export default SearchPage;
