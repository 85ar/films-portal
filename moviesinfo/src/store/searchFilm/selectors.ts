import { IStore } from "./types";

export const selectList = (state: {
  searchFilmReducer: IStore;
}): IStore["search"] => state.searchFilmReducer.search;
