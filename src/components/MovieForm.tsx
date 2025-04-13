import Button from './Button'
import { useMovieContext } from '../contexts/MovieContext'

function MovieForm() {
  const { addMovie } = useMovieContext();

  return (
    <>
      <Button 
        buttonText='Add Movie'
        onClick={addMovie}
      /> 
    </>
  )
}

export default MovieForm