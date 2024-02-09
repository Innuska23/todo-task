import { Todo } from 'types'

interface IToDoItemProps {
  todo: Todo
  onComplete: (todo: Todo) => void
  onDelete: (todo: Todo) => void
}

const ToDoItem = ({ todo, onComplete, onDelete }: IToDoItemProps) => {
  const handleComplete = (todo: Todo) => () => {
    onComplete({ ...todo, isDone: !todo.isDone })
  }

  const handleDelete = (todo: Todo) => () => {
    onDelete({ ...todo, isDone: !todo.isDone })
  }

  const isDone = todo.isDone
    ? 'bg-green-500 text-white hover:bg-green-400'
    : 'bg-gray-500 text-gray-200 hover:bg-gray-400'

  return (
    <div className="flex w-full items-center justify-between gap-3 rounded-md bg-white p-4 shadow-md">
      <p className="whitespace-normal break-all text-left text-gray-800">
        {todo.text}
      </p>

      <div className="flex gap-3">
        <button
          className={`flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus:outline-none ${isDone}`}
          onClick={handleComplete(todo)}
        >
          {todo.isDone ? 'Completed' : 'Unfulfilled'}
        </button>

        <button
          className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={handleDelete(todo)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ToDoItem
