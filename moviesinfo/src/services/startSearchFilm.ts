import axios, { AxiosResponse } from "axios";

const startSearchFilm = (genre: string): Promise<AxiosResponse> => {
  return axios.get(`https://api.tvmaze.com/shows/${genre}`);
};

export default startSearchFilm;
