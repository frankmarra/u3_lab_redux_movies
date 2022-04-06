const { GET_MOVIE_REVIEWS } = require('../types')

const iState = {
  movieReviews: []
}

const MovieReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIE_REVIEWS:
      return { ...state, movieReviews: action.payload }
    default:
      return { ...state }
  }
}

export default MovieReviewReducer
