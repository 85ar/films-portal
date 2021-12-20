export interface IFilmsDetail {
  show: IShow;
}
export interface IShow {
  id: string;
  image: IImage[];
  name: string;
  premiered: string;
  network: INetwork;
  genres: IGenres;
}

export interface IImage {
  medium: string;
}

export interface INetwork {
  country: ICountry;
}

export interface ICountry {
  code: string;
}

export interface IGenres {
  genres: string[];
}
