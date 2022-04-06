import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadNowPlayingMovies } from '../store/actions/MovieActions'
import { IMAGE_BASE_PATH } from '../globals'

const mapStateToProps = ({ nowPlayingState }) => {
  return { nowPlayingState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNowPlayingMovies: () => dispatch(LoadNowPlayingMovies())
  }
}

const NowPlaying = (props) => {
  useEffect(() => {
    props.fetchNowPlayingMovies()
  }, [])

  return (
    <div className="now-playing">
      {props.nowPlayingState.nowPlaying.map((movie) => (
        <div key={movie.id} className="now-playing-movie">
          <Link to={`/movies/${movie.id}`}>
            <div className="movie-card">
              <img
                src={`${IMAGE_BASE_PATH}` + movie.poster_path}
                alt={movie.title}
                className="movie-poster"
              />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)
