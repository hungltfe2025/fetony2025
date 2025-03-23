import React from 'react';

/*
first render : render UI with initial state -> useEffect -> call api -> update new state -> component re-render with new state

useEffect: always run when component first-render
cleanup function useEffect: only run when component re-render

{
  name: xx,
  email: xxx.
  age: xxx
}

*/

function EffectHook() {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const [reset, setReset] = React.useState(false);

  React.useEffect(() => {
    console.log('useEffect with value dependency');
    const timer = setInterval(() => {
      setCount(prevState => prevState + 1)
    }, 50000)

    return () => {
      setCount(0);
      clearInterval(timer)
      console.log('cleanup useEffect with value dependency');
    }
  }, [reset])  // re-run when values change (include first render)

  React.useEffect(() => {
    console.log('useEffect with no dependency');
   
    return () => {
      console.log('cleanup useEffect with no dependency');
    }
  },); // every run when component re-render (include first render)

  React.useEffect(() => {
    console.log('useEffect with empty dependency');
    async function fetchTodos() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3&_page=1');
        const data = await res.json();
        setTodos(data);
      } catch(e) {
        console.log('error: ', e)
      }
    }
    fetchTodos();

    return () => {
      console.log('cleanup useEffect with empty dependency');
    }
  }, []) // rune once time in first render

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with empty dependency');
    return () => {
      console.log('cleanup useLayoutEffect with empty dependency');
    }
  }, [])  // re-run when values change (include first render)

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect with no dependency');
   
    return () => {
      console.log('cleanup useLayoutEffect with no dependency');
    }
  },); // every run when component re-render (include first render)

  function updateCount() {
    setCount(prevState => prevState + 1);
  }

  console.log('----------render')
  return (
    <div>
      <h1>EffectHook</h1>
      Count: {count} <br />
      <div>Todo</div>
      {todos.map((todo: any) => (
        <div key={todo.id}>{todo.title}</div>
      ))}

      <button type='button' onClick={updateCount}>Update Count</button>
      <button type='button' onClick={() => setReset(prevState => !prevState)}>Reset Count</button>
      
      <div>
        <div className='box box1' onClick={() => {
          console.log('box1')
        }}>box 1</div>
        <div className='box'>box 2</div>
      </div>
    
    </div>
  )
}

export default EffectHook