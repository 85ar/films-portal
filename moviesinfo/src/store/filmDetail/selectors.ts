import { IStore } from "./types";

export const selectList = (state: {
  filmDetailReducer: IStore;
}): IStore["list"] => state.filmDetailReducer.list;
