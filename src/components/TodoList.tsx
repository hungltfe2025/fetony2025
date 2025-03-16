import React from 'react'
import { ITodoItem } from '../LiftingStateUp'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: ITodoItem[],
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps ) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.title} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  )
}

export default TodoList