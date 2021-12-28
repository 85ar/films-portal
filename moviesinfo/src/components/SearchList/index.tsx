import React from "react";

import { IFilms } from "types/IFilms";
import SearchItem from "./components/SearchItem";

import "./styles.scss";

interface ISearchListParams {
  item: IFilms[];
}

const SearchList: React.FC<ISearchListParams> = ({ item }) => {
  return (
    <div className="searchList">
      {item.map((films: IFilms) => (
        <SearchItem key={films.show.id} item={films.show} />
      ))}
    </div>
  );
};

export default SearchList;
