export interface IFilmsDetail {
  id: string;
  image: IImage;
  name: string;
  premiered: string;
  genres: IGenres[];
  network: INetwork;
  summary: string;
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
