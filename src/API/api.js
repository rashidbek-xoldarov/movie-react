import axios from "axios";
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = `93fc7f9584a58e436d00119da83439d6`;

export const api = {
  getPolularMovies: (page) => {
    return axios.get(BASE_URL + `/movie/popular`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
  },
  getTopMovies: (page) => {
    return axios.get(BASE_URL + `/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
  },
  getUpcomingMovies: (page) => {
    return axios.get(BASE_URL + `/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
  },
  getSingleMovie: (id) => {
    return axios.get(BASE_URL + "/movie/" + id, {
      params: {
        api_key: API_KEY,
      },
    });
  },
  getActors: (id) => {
    return axios.get(BASE_URL + "/movie/" + id + "/credits", {
      params: {
        api_key: API_KEY,
      },
    });
  },
  getSimilarMovies: function (id, page) {
    return axios.get(BASE_URL + "movie/" + id + "/similar", {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
  },
  getActorInfo: (id) => {
    return axios.get(BASE_URL + "person/" + id, {
      params: {
        api_key: API_KEY,
      },
    });
  },
  getActorMovie: (id) => {
    return axios.get(BASE_URL + "person/" + id + "/movie_credits", {
      params: {
        api_key: API_KEY,
      },
    });
  },
};
