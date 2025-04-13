import React from 'react'
import WrapperComponent from './WrapperComponent';
import { useMovieContext } from './contexts/MovieContext';

function Home() {
  console.log('home render')
  return (
    <div>this is home</div>
  )
}


function DemoWrapperComponent() {
  const { movies } = useMovieContext();
  console.log('movies =================: ', movies)
  const [isAuth, setIsAuth] = React.useState(false);

  function toggleAuth() {
    setIsAuth(prevState => !prevState)
  }

  return (
    <div>
      <h1>DemoWrapperComponent</h1>
      <button type="button" onClick={toggleAuth}>Toggle Auth</button>

      <WrapperComponent isAuth={isAuth}>
        <Home />
      </WrapperComponent>

    </div>
  )
}

export default DemoWrapperComponent