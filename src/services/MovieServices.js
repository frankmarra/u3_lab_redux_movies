import Movies from './'
import { TMDBKey } from '../globals'

export const GetNowPlaying = async () => {
  try {
    const res = await Movies.get(
      `/now_playing?api_key=${TMDBKey}&language=en-US&page=1`
    )
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
