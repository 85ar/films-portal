import { AnyAction } from "redux";

import { IStore } from "./types";

const initialState = {
  search: null,
};

const searchFilmReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case "searchFilm/setSearchFilm":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default searchFilmReducer;
