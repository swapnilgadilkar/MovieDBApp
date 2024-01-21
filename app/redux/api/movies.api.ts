import {api} from './api';
import {
  GETMovieCredits,
  GETMovieDetails,
  GETMovieReviews,
  GETMovieVideos,
  GETTrending,
  MEDIA_TYPE,
  TIME_WINDOW,
} from './endpoints';

export const moviesApi = api.injectEndpoints({
  endpoints: builder => ({
    getTrendingMovies: builder.query({
      query: () => ({
        url: GETTrending.replace(':time_window', TIME_WINDOW.DAY).replace(
          ':media_type',
          MEDIA_TYPE.MOVIE,
        ),
        method: 'GET',
      }),
    }),
    getMovieDetails: builder.query({
      query: movie_id => ({
        url: GETMovieDetails.replace(':movie_id', movie_id),
        method: 'GET',
      }),
    }),
    getMovieCredits: builder.query({
      query: movie_id => ({
        url: GETMovieCredits.replace(':movie_id', movie_id),
        method: 'GET',
      }),
    }),
    getMovieReviews: builder.query({
      query: movie_id => ({
        url: GETMovieReviews.replace(':movie_id', movie_id),
        method: 'GET',
      }),
    }),
    getMovieVideos: builder.query({
      query: movie_id => ({
        url: GETMovieVideos.replace(':movie_id', movie_id),
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useGetTrendingMoviesQuery} = moviesApi;
