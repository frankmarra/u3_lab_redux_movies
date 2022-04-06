import Movies from './'
import { TMDBKey } from '../globals'

export const GetNowPlaying = async () => {
  try {
    const res = await Movies.get(
      `/now_playing?api_key=${TMDBKey}&language=en-US&page=1`
    )
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (movieId) => {
  try {
    const res = await Movies.get(
      `/${movieId}?api_key=${TMDBKey}&langauge=en-US`
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMovieReviews = async (movieId) => {
  try {
    const res = await Movies.get(
      `/${movieId}/reviews?api_key=${TMDBKey}&langauge=en-US&page=1`
    )
    return res.data
  } catch (error) {
    throw error
  }
}
