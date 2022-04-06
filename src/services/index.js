import Axios from 'axios'

const Movies = Axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`
})

export default Movies
