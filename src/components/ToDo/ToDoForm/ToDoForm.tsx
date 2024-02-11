import React, { FormEvent, useState } from 'react'
import { Todo } from 'types'
import { id } from 'utils'

interface IToDoFormProps {
  onAdd: (todo: Todo) => void
}

const ToDoForm: React.FC<IToDoFormProps> = ({ onAdd }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!todo.trim()) return
    onAdd({ id: id(), isDone: false, text: todo })
    setTodo('')
  }

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  return (
    <form
      className="mb-4 flex justify-center gap-2"
      onSubmit={handleSubmit}
      data-testid="form"
    >
      <input
        id="task"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-indigo-500"
        placeholder="Enter a new task..."
        autoComplete="off"
        type="text"
        name="task"
        required
        value={todo}
        onChange={onChangeForm}
      />
      <button
        type="submit"
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Add task
      </button>
    </form>
  )
}

export default ToDoForm
