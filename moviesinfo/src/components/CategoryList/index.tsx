import React from "react";

import { IFilms } from "types/IFilms";
import CategoryCard from "./components/CategoryCard";

import "./styles.scss";

interface ICategoryListParams {
  list: IFilms[];
}

const CategoryList: React.FC<ICategoryListParams> = ({ list }) => (
  <div className="categoryList">
    {list.map((films: IFilms) => (
      <CategoryCard key={films.show.id} item={films.show} />
    ))}
  </div>
);

export default CategoryList;
