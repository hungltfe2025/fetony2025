import { useMovieContext } from "../contexts/MovieContext"

function MovieList() {
  const { movies } = useMovieContext();
  return (
    <ul>
      <ul>
        {movies && movies.map(item => (
          <li key={item.id}>Title: {item.title}</li>
        ))}
      </ul>
    </ul>
  )
}

export default MovieList