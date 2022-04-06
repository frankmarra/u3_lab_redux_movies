import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoadMovieReviews } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieReviewState }) => {
  return { movieReviewState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieReviews: (id) => dispatch(LoadMovieReviews(id))
  }
}

const MovieReviews = (props) => {
  console.log(props)

  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieReviews(id)
  }, [id])

  return (
    <div className="movie-review-wrapper">
      {props.movieReviewState.movieReviews.results.map((result) => (
        <div className="movie-review" key={result.id}>
          <div className="movie-review-header">
            <div className="username">
              <h5>{result.author_details.username}</h5>
            </div>
            <div className="user-rating">
              <h5>Rating: {result.author_details.rating}</h5>
            </div>
          </div>
          <div className="user-review">
            <p>{result.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews)
