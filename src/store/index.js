import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import NowPlayingReducer from './reducers/NowPlayingReducer'

const store = createStore(
  combineReducers({
    nowPlayingState: NowPlayingReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
