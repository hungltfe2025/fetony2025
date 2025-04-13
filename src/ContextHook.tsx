import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'

function ContextHook() {
  return (
    <div>
      <h1>ContextHook</h1>

      <MovieForm />
      <MovieList />
    </div>
  )
}

export default ContextHook