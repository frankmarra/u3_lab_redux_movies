const { Get_Now_Playing } = require('../types')

const iState = {
  nowPlaying: []
}

const NowPlayingReducer = (state = iState, action) => {
  switch (action.type) {
    case Get_Now_Playing:
      return { ...state, nowPlaying: action.payload }
    default:
      return { ...state }
  }
}

export default NowPlayingReducer
