import { Dispatch } from "redux";
import startSearchFilm from "services/startSearchFilm";
import { IStore } from "./types";

export const setSearchFilmAction = (list: IStore["search"]) => {
  return {
    type: "searchFilm/setSearchFilm",
    payload: list,
  };
};

export const loadSearchFilm = (jenre: string) => async (dispatch: Dispatch) => {
  try {
    const response = await startSearchFilm(jenre);

    dispatch(setSearchFilmAction(response.data));
  } catch (e) {
    console.log(e, "произошла ошибка");
  }
};
