export interface IResponse {
  statusCode: number;
  message: string;
  data: any;
}

export interface IMovie {
  poster: string;
  name: string;
  description?: string;
  start?: string;
  country?: string;
  production?: string;
  link: string;
  quality?: string;
  time?: string;
  duration?: string;
  type?: string;
  season?: string;
  ep?: string;
  yearOrSeason?: string;
  durationOrEP?: string;
  casts?: string[];
  servers?: {
    title: string;
    linkId: string;
  }[];
  relatedMovies?: IMovie[];
  IMDB?: string;
  genres?: {
    text: string;
    link: string;
  }[];
  cover?: string;
}

export interface ISource {
  headers: {
    Referer?: string;
  };
  sources: {
    url: string;
    quality: string;
    isM3U8: boolean;
  }[];
}

export interface IEpisode {
  id: string;
  dataId: string;
  title: string;
}
