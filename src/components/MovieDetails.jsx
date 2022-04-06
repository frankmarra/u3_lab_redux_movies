import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadMovieDetails } from '../store/actions/MovieActions'
import { IMAGE_BASE_PATH } from '../globals'
import { Link } from 'react-router-dom'
import MovieReviews from './MovieReviews'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  }, [id])

  return (
    <div className="movie-details-wrapper">
      <div className="movie-details-title">
        {props.movieDetailsState.movieDetails.title}
      </div>
      <div className="movie-details-image">
        <img
          src={
            `${IMAGE_BASE_PATH}` +
            props.movieDetailsState.movieDetails.backdrop_path
          }
          alt={props.movieDetailsState.movieDetails.title}
        />
        <div className="movie-details-overview">
          {props.movieDetailsState.movieDetails.overview}
        </div>
        <div className="movie-details-release-date">
          Release Date: {props.movieDetailsState.movieDetails.release_date}
        </div>
      </div>
      <Link to={'/'}>Back</Link>
    </div>
  )
}

// <MovieReviews />
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
