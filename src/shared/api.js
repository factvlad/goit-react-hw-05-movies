import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '9408f4ad1863a9d272018e8be0447604',
};

export const getMostPopularMovies = async (page) => {
  const { data } = await axios.get('/trending/movie/week', {
    params: {
      page,
    },
  });
  return data;
};

export const getMovieForId = async id => {
  const { data } = await axios.get(`/movie/${id}&language=en-US`,
  );

  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};

export const getMoviesQuery = async (name, page) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query: name,
      page: page,
    },
  });
  return data;
};
