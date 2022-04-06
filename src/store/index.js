import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import NowPlayingReducer from './reducers/NowPlayingReducer'
import MovieDetailsReducer from './reducers/MovieDetailsReducer'
import MovieReviewReducer from './reducers/MovieReviewReducer'

const store = createStore(
  combineReducers({
    nowPlayingState: NowPlayingReducer,
    movieDetailsState: MovieDetailsReducer,
    movieReviewState: MovieReviewReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
