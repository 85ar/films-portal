import React from "react";

import { IFilms } from "types/IFilms";
import SearchItem from "./components";

interface ISearchListParams {
  item: IFilms[];
}

const SearchList: React.FC<ISearchListParams> = ({ item }) => {
  return (
    <div>
      {item.map((films: IFilms) => (
        <SearchItem key={films.show.id} item={films.show} />
      ))}
    </div>
  );
};

export default SearchList;
