import Axios from 'axios'

const Movies = Axios.get({
  baseURL: `https://api.themoviedb.org/3/movie`
})

export default Movies
