const GETTrending = '/trending/:media_type/:time_window';
const GETMovieDetails = '/movie/:movie_id';
const GETMovieCredits = '/movie/:movie_id/credits';
const GETMovieReviews = '/movie/:movie_id/reviews';
const GETMovieVideos = '/movie/:movie_id/videos';

enum MEDIA_TYPE {
  TV = 'tv',
  MOVIE = 'movie',
}

enum TIME_WINDOW {
  DAY = 'day',
}

const Access_Token = '/auth/access_token';
const Request_Token = '/auth/request_token';

export {
  TIME_WINDOW,
  MEDIA_TYPE,
  GETMovieVideos,
  GETMovieReviews,
  GETMovieCredits,
  GETMovieDetails,
  GETTrending,
  Access_Token,
  Request_Token,
};
