import React from 'react'

// PascalCase -> Book, ProductDetail
/* render component
- name must PascalCase
- must have: < />
*/

function Book() {
  return (
    <div>book</div>
  )
}


function JSX() {
  const sum = 1 + 1; // expression js
  const renderButton = (
    <button>update count</button>
  ); //  jsx

  // UI jsx  
  return (
    <React.Fragment>
      <h1>JSX</h1>
      <br />
      Sum: {sum} <br />
      Button: {renderButton} <br />
      Closed element: <input />
      <div />
      <br />
      {/* {book} */}
      <Book />
    </React.Fragment>
  )
}

export default JSX