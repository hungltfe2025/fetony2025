import React from 'react'

function Button({ buttonText, ...restProps }) {
  return (
    <button {...restProps}>{buttonText}</button>
  )
}

export default Button;