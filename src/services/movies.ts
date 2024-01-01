import { CreditTypes } from '../types/credit';
import { MovieDetailType, MovieTypes } from '../types/movie';
import axiosInstance from '../utils/axiosInstance';

export async function getMovies() {
  return await axiosInstance
    .get<{
      page: number;
      results: MovieTypes[];
      total_pages: number;
      total_results: number;
    }>(
      '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    )
    .then(ress => ress.data);
}

export async function getMovieDetailService(movieId: string) {
  return await axiosInstance
    .get<MovieDetailType>(`/movie/${movieId}`)
    .then(ress => ress.data);
}

export async function getCreditService(movieId: string) {
  return await axiosInstance
    .get<CreditTypes>(`/movie/${movieId}/credits`)
    .then(ress => ress.data);
}
