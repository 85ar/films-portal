export interface IFilms {
  show: IShow;
}

interface IShow {
  id: string;
  image: IImage;
  name: string;
  premiered: string;
  genres: IGenres[];
  network: INetwork;
}

interface IImage {
  medium: string;
  original: string;
}

interface IGenres {
  genres: string;
}

interface INetwork {
  country: string;
}
