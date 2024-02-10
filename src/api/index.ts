import { IResponse } from '@/types/interface';
import client from './client';

const Api = {
  getHome: async () => {
    const response: IResponse = await client.get('/home');
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  getMovies: async (page = '1') => {
    const response: IResponse = await client.get('/movie', {
      params: {
        page,
      },
    });
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  getTVShows: async (page = '1') => {
    const response: IResponse = await client.get('/tv-show', {
      params: {
        page,
      },
    });
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  getTopIMDB: async (page = '1') => {
    const response: IResponse = await client.get('/top-imdb', {
      params: {
        page,
      },
    });
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  search: async (keyword: string, page = '1') => {
    const response: IResponse = await client.get('/search', {
      params: {
        keyword,
        page,
      },
    });
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  getDetailMovie: async (slug: string) => {
    const response: IResponse = await client.get(`/movie/${slug}`);
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  getServersMovie: async (slug: string) => {
    const response: IResponse = await client.get('/movie/servers/' + slug);
    if (response.statusCode === 200) {
      return response.data;
    } else {
      return null;
    }
  },
  getSourceMovie: async (slug: string, server?: string) => {
    const episodeId = slug.split('-')[slug.split('-').length - 1];
    const response: IResponse = await client.get(
      `/movie/source/${slug.replace('/movie/', '')}`,
      {
        params: {
          episodeId,
          server,
        },
      }
    );
    if (response.statusCode === 200) {
      return response.data;
    }
  },
  getDetailTV: async (slug: string) => {
    const response: IResponse = await client.get(`/tv/${slug}`);
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  getTVServers: async (slug: string, episodeId?: string) => {
    const response: IResponse = await client.get(`/tv/servers/${slug}`, {
      params: {
        episodeId,
      },
    });
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
  getTVEpisodes: async (slug: string, seasonId: string) => {
    const response: IResponse = await client.get(`/tv/episodes/${slug}`, {
      params: {
        seasonId,
      },
    });
    if (response.statusCode === 200) {
      return response.data;
    }
    return null;
  },
};

export default Api;
