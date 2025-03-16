import { ITodoItem } from '../LiftingStateUp'

interface TodoCountProps {
  todos: ITodoItem[];
}

function TodoCount({ todos }: TodoCountProps) {
  return (
    <>
      Todo Count: {todos.length}
    </>
  )
}

export default TodoCount