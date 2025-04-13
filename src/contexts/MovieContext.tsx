import React from 'react';

interface MovieItem  {
  id: number,
  title: string
}

interface MoiveContextProps {
  movies: MovieItem[],
  addMovie: () => void
}

export const MovieContext = React.createContext<MoiveContextProps>({
  movies: [],
  addMovie: () => {}
});

export const MovieProvider = ({ children }: React.PropsWithChildren) => {
  const [movies, setMovies] = React.useState<MovieItem[]>([]);

  function addMovie() {
    const newItem = {
      id: Date.now(),
      title: 'Title' + Date.now()
    }
    setMovies(prevState => [...prevState, newItem])
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  )
};

export const useMovieContext = () => React.useContext(MovieContext)