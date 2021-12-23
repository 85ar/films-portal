export interface IFilmsDetail {
  id: string;
  image: IImage | null;
  name: string;
  premiered: string | null;
  genres: string[];
  network: INetwork | null;
  summary: string | null;
  rating: IAverage;
}

interface IImage {
  medium: string;
  original: string;
}

interface INetwork {
  country: ICountry;
}
interface ICountry {
  name: string;
}

interface IAverage {
  average: string;
}