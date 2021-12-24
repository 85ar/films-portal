import { AnyAction } from "redux";

import { IStore } from "./types";

const initialState = {
  detail: null,
};

const filmDetailReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case "filmDetail/setFilmDetail":
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};

export default filmDetailReducer;
