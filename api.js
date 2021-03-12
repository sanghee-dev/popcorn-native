import axios from "axios";

const TMDB_KEY = "3a39f0c7dccba302f170069ba8c6403c";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const fetchData = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => fetchData("/movie/now_playing"),
  upcoming: () => fetchData("/movie/upcoming"),
  popular: () => fetchData("/movie/popular"),
  topRated: () => fetchData("/movie/top_rated"),
  detail: (id) =>
    fetchData(`/movie/${id}`, {
      append_to_response: "videos",
    }),
  search: (term) =>
    fetchData("/search/movie", {
      query: encodeURIComponent(term),
    }),
  discover: () => fetchData(`/discover/movie`),
  video: (id) => fetchData(`/movie/${id}/videos`),
  credits: (id) => fetchData(`/movie/${id}/credits`),
  reviews: (id) => fetchData(`/movie/${id}/reviews`),
  collection: (id) => fetchData(`/collection/${id}`),
  trending: (media_type = "movie", time_window = "week") =>
    fetchData(`/trending/${media_type}/${time_window}`),
};

export const tvApi = {
  airingToday: () => fetchData("/tv/airing_today"),
  onTheAir: () => fetchData("/tv/on_the_air"),
  popular: () => fetchData("/tv/popular"),
  topRated: () => fetchData("/tv/top_rated"),
  detail: (id) =>
    fetchData(`/tv/${id}`, {
      append_to_response: "videos",
    }),
  search: (term) =>
    fetchData("/search/tv", {
      query: encodeURIComponent(term),
    }),
  video: (id) => fetchData(`/tv/${id}/videos`),
  credits: (id) => fetchData(`/tv/${id}/credits`),
  reviews: (id, season_number) =>
    fetchData(`/tv/${id}/season/${season_number}`),
  trending: (media_type = "tv", time_window = "week") =>
    fetchData(`/trending/${media_type}/${time_window}`),
};

export const imageApi = (path) => `https://image.tmdb.org/t/p/w500${path}`;
