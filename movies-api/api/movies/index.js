import express from 'express';
import asyncHandler from 'express-async-handler';
import { 
    getMovies,
    getMovie,
    getGenres,
    getMovieImages,
    getTrendingMoviesToday,
    getTopRatedMoviesToday,
    getPopularMovies,
    getUpcomingMovies,
    getMovieReviews,
    getMovieRecommendations,
    getMovieCredits,
    getPersonDetails,
    getPersonMovieCredits
} from '../tmdb-api'; 

const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

// Trending movies today
router.get('/trending', asyncHandler(async (req, res) => {
    const trending = await getTrendingMoviesToday();
    res.status(200).json(trending);
}));

// Top rated movies
router.get('/top-rated', asyncHandler(async (req, res) => {
    const topRated = await getTopRatedMoviesToday();
    res.status(200).json(topRated);
}));

// Popular movies
router.get('/popular', asyncHandler(async (req, res) => {
    const popular = await getPopularMovies();
    res.status(200).json(popular);
}));

// Upcoming movies
router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcoming = await getUpcomingMovies();
    res.status(200).json(upcoming);
}));

// Genres
router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

// Person details
router.get('/person/:id', asyncHandler(async (req, res) => {
    const person = await getPersonDetails({ queryKey: [null, { id: req.params.id }] });
    res.status(200).json(person);
}));

// Person movie credits
router.get('/person/:id/movie_credits', asyncHandler(async (req, res) => {
    const credits = await getPersonMovieCredits({ queryKey: [null, { id: req.params.id }] });
    res.status(200).json(credits);
}));

// Movie images
router.get('/:id/images', asyncHandler(async (req, res) => {
    const images = await getMovieImages({ queryKey: [null, { id: req.params.id }] });
    res.status(200).json(images);
}));

// Movie reviews
router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const reviews = await getMovieReviews({ queryKey: [null, { id: req.params.id }] });
    res.status(200).json(reviews);
}));

// Movie recommendations
router.get('/:id/recommendations', asyncHandler(async (req, res) => {
    const recommendations = await getMovieRecommendations({ queryKey: [null, { id: req.params.id }] });
    res.status(200).json(recommendations);
}));

// Movie credits
router.get('/:id/credits', asyncHandler(async (req, res) => {
    const credits = await getMovieCredits({ queryKey: [null, { id: req.params.id }] });
    res.status(200).json(credits);
}));

// Movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const movie = await getMovie({ queryKey: [null, { id: req.params.id }] });
    res.status(200).json(movie);
}));

export default router;
