import axios, { AxiosResponse } from "axios";

const getFilmsDetail = (id: string): Promise<AxiosResponse> => {
  return axios.get(`https://api.tvmaze.com/shows/${id}`);
};

export default getFilmsDetail;
