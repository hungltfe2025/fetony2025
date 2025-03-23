import React from 'react'

function createInitializeCount() {
  console.log('createInitializeCount: ')
  return 0;
}

function StateHook() {
  const [count, setCount] = React.useState(createInitializeCount)

  function updateCount() {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    setCount(prevState => prevState + 1);
    setCount(prevState => prevState + 2);
    setCount(prevState => prevState + 3);
  }

  return (
    <div>
      <h1>StateHook</h1>
      Count: {count} <br />

      <button type='button' onClick={updateCount}>Update Count</button>
    </div>
  )
}

export default StateHook