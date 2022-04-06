import { Route, Routes } from 'react-router-dom'
import NowPlaying from './components/NowPlaying'
import MovieDetails from './components/MovieDetails'
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Now In Theaters!</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NowPlaying />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
