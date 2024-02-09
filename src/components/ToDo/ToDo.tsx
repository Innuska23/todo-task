import { useState } from 'react'
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoList from './ToDoList/ToDoList'
import { Todo } from 'types'

const ToDo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleNewTodo = (todo: Todo) => {
    setTodoList((curr) => [...curr, todo])
  }

  const handleCompleteTodo = (newTodo: Todo) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo
        }

        return todo
      })
    )
  }

  const handleDeleteTodo = (todoToDelete: Todo) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoToDelete.id))
  }

  return (
    <div className="mx-auto mb-8 mt-6 flex w-full max-w-md flex-col">
      <ToDoForm onAdd={handleNewTodo} />
      <ToDoList
        todoList={todoList}
        onComplete={handleCompleteTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  )
}

export default ToDo
