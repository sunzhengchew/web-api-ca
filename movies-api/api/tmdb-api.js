import fetch from "node-fetch";

const TMDB_BASE = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_KEY;

export const getMovies = async () => {
  const response = await fetch(
    `${TMDB_BASE}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
};

export const getMovie = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${TMDB_BASE}/movie/${id}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }

  return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${TMDB_BASE}/movie/${id}/images?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie images");
  }

  return response.json();
};

export const getMovieReviews = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${TMDB_BASE}/movie/${id}/reviews?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie reviews");
  }

  return response.json();
};

export const getMovieRecommendations = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${TMDB_BASE}/movie/${id}/recommendations?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return response.json();
};

export const getMovieCredits = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${TMDB_BASE}/movie/${id}/credits?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch credits");
  }

  return response.json();
};

export const getTrendingMoviesToday = async () => {
  const response = await fetch(
    `${TMDB_BASE}/trending/movie/day?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return response.json();
};

export const getTopRateMoviesToday = async () => {
  const response = await fetch(
    `${TMDB_BASE}/movie/top_rated?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  return response.json();
};

export const getPopularMovies = async () => {
  const response = await fetch(
    `${TMDB_BASE}/movie/popular?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${TMDB_BASE}/movie/upcoming?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movies");
  }

  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(
    `${TMDB_BASE}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }

  return response.json();
};

export const getPersonDetails = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${TMDB_BASE}/person/${id}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch person details");
  }

  return response.json();
};

export const getPersonMovieCredits = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${TMDB_BASE}/person/${id}/movie_credits?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch person movie credits");
  }

  return response.json();
};
