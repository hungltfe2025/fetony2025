import React from 'react'

/*  && ||
 so sanh vế trái, phải
 - vế trái là true, thì lấy value vế phải
 - vế trái là false, thì lấy value vế trái

tony && '' -> ''
'' && tony -> ''
true && hung -> hung
false && huy -> false
tony && hung && huy -> huy

|| -> lay value true đầu tiên mà nó chạm.

tony || '' -> tony
tony || huy -> tony
'' || tony || course -> tony

*/

function ConditionalRendering() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'xx' }
  ])
  return (
    <div>
      <h1>ConditionalRendering</h1>

      {'tony' && ''} <br />
      {'' && 'tony' } <br />
      {true && 'hung'} <br />
      {false && 'huy'} <br />
      {'tony' && 'hung' && 'course'} <br />
      {'' || 'tony' || 'huy'} <br />

      <br />
      <h4>Todos</h4>
      {todos && Array.isArray(todos) && todos.map(todo => (
        <div>{todo.title}</div>
      ))}
    </div>
  )
}

export default ConditionalRendering