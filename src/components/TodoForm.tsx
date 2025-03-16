import React from 'react'
import Button from './Button'
import { ITodoItem } from '../LiftingStateUp';

interface TodoFormProps {
  addTodo: (todoItem: ITodoItem) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = React.useState('');

  function _addTodo() {
    const todoItem = {
      title: text,
      id: Date.now()
    }
    addTodo(todoItem)
  }

  return (
    <>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <Button 
        buttonText='Add todo'
        onClick={_addTodo}
      /> 
    </>
  )
}

export default TodoForm