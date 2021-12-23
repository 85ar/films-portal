import { AnyAction } from "redux";

import { IStore } from "./types";

const initialState = {
  list: [],
};

const filmDetailReducer = (
  state: IStore = initialState | null,
  action: AnyAction
) => {
  switch (action.type) {
    case "filmDetail/setFilmDetail":
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};

export default filmDetailReducer;
