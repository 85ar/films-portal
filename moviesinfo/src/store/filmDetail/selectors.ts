import { IStore } from "./types";

export const selectList = (state: { filmDetailReducer: IStore }): IStore["detail"] =>
  state.filmDetailReducer.detail;
