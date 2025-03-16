import React from 'react'
import TodoForm from './components/TodoForm'
import TodoCount from './components/TodoCount'
import TodoList from './components/TodoList'

export interface ITodoItem {
  id: number,
  title: string
}

function LiftingStateUp() {
  const [todos, setTodos] = React.useState<ITodoItem[]>([]);

  function addTodo(todoItem: ITodoItem) {
    setTodos(prevState => [...prevState, todoItem])
  }

  function deleteTodo(id: number) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h1>LiftingStateUp</h1>

      <TodoForm addTodo={addTodo} />
      <br />
      
      <TodoCount todos={todos} />
      
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default LiftingStateUp