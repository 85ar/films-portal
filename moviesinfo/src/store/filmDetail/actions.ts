import { Dispatch } from "redux";
import getFilmsDetail from "services/getFilmsDetail";
import { IStore } from "./types";

export const setFilmDetailAction = (list: IStore["list"]) => {
  return {
    type: "filmDetail/setFilmDetail",
    payload: list,
  };
};

export const loadFilmDetail = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await getFilmsDetail(id);

    dispatch(setFilmDetailAction(response.data));
  } catch (e) {
    console.log(e, "произошла ошибка");
  }
};
