import ToDoItem from '../ToDoItem/ToDoItem'
import { Todo } from 'types'

interface IToDoListProps {
  todoList: Todo[]
  onComplete: (todo: Todo) => void
  onDelete: (todo: Todo) => void
}

const ToDoList = ({ todoList, onComplete, onDelete }: IToDoListProps) => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <h1
        className="text-lg font-semibold leading-6 text-gray-900"
        style={{ textTransform: 'uppercase' }}
      >
        Tasks:
      </h1>

      {todoList.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ToDoList
