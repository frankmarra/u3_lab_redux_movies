const { GET_NOW_PLAYING } = require('../types')

const iState = {
  nowPlaying: []
}

const NowPlayingReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return { ...state, nowPlaying: action.payload }
    default:
      return { ...state }
  }
}

export default NowPlayingReducer
