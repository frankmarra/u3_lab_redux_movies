import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadNowPlayingMovies } from '../store/actions/MovieActions'

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
    <div>
      {props.nowPlayingState.movies.map((movie) => (
        <ul key={movie.id}>
          <Link to={`/nowplayingmovies/${movie.id}`}>{movie.name}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)
