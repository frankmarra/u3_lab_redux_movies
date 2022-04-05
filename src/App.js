import { Route, Routes } from 'react-router-dom'
import NowPlaying from './components/NowPlaying'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <Routes>
        <Route path="/movies/now_playing" element={<NowPlaying />} />
      </Routes>
    </div>
  )
}

export default App
