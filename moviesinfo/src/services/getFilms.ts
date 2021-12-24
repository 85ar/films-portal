import axios, { AxiosResponse } from "axios";

const getFilms = (): Promise<AxiosResponse> => {
  return axios.get("https://api.tvmaze.com/search/shows?q=robot");
};

export default getFilms;
