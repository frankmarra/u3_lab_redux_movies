import {
  GetNowPlaying,
  GetMovieDetails,
  GetMovieReviews
} from '../../services/MovieServices'
import { GET_MOVIE_DETAILS, GET_NOW_PLAYING, GET_MOVIE_REVIEWS } from '../types'

export const LoadNowPlayingMovies = () => {
  return async (dispatch) => {
    try {
      const nowPlaying = await GetNowPlaying()
      dispatch({
        type: GET_NOW_PLAYING,
        payload: nowPlaying
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const movieDetails = await GetMovieDetails(id)
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: movieDetails
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieReviews = (id) => {
  return async (dispatch) => {
    try {
      const movieReviews = await GetMovieReviews(id)
      dispatch({
        type: GET_MOVIE_REVIEWS,
        payload: movieReviews
      })
    } catch (error) {
      throw error
    }
  }
}
