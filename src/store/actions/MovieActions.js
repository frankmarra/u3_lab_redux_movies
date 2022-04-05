import { GetNowPlaying } from '../../services/MovieServices'
import { GET_NOW_PLAYING } from '../types'

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
