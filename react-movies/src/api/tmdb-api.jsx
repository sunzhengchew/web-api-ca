const BASE_URL = "http://localhost:8080/api";

// Discover movies (homepage)
export const getMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies/discover`);
  return response.json();
};

// Movie details
export const getMovie = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const response = await fetch(`${BASE_URL}/movies/${id}`);
  return response.json();
};

// Movie images
export const getMovieImages = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const response = await fetch(`${BASE_URL}/movies/${id}/images`);
  return response.json();
};

// Movie reviews
export const getMovieReviews = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const response = await fetch(`${BASE_URL}/movies/${id}/reviews`);
  return response.json();
};

// Movie recommendations
export const getMovieRecommendations = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const response = await fetch(`${BASE_URL}/movies/${id}/recommendations`);
  return response.json();
};

// Movie credits
export const getMovieCredits = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const response = await fetch(`${BASE_URL}/movies/${id}/credits`);
  return response.json();
};


export const getTrendingMoviesToday = async () => {
  const response = await fetch(`${BASE_URL}/movies/trending`);
  return response.json();
};

export const getTopRatedMoviesToday = async () => {
  const response = await fetch(`${BASE_URL}/movies/top-rated`);
  return response.json();
};

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies/popular`);
  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies/upcoming`);
  return response.json();
};

export const getGenres = async () => {
  const response = await fetch(`${BASE_URL}/movies/genres`);
  return response.json();
};

export const getPersonDetails = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const response = await fetch(`${BASE_URL}/movies/person/${id}`);
  return response.json();
};

export const getPersonMovieCredits = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  const response = await fetch(`${BASE_URL}/movies/person/${id}/movie_credits`);
  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch(`${BASE_URL}/users?action=register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return response.json();
};