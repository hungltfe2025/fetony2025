import React from "react";

function ListKey() {
  const [todos, setTodos] = React.useState([
    { title: 'learn react', isStock: false },
    { title: 'learn javascript', isStock: true },
  ]);

  const dataSource = todos.map((todo, index) => {
    return (
      <div 
        key={todo.title + index}
        style={{ color: todo.isStock ? 'black' : 'red' }}
      >
        {todo.title}
      </div>
    )
  })
  console.log('dataSource: ', dataSource)

  return (
    <div>
      <h1>ListKey</h1> <br />
      {['react', 'javascrit']}
      {dataSource}
      {/* {dataSource.map(data => {
        return (
          <div>{data.title}</div>
        )
      })} */}
    </div>
  )
}

export default ListKey