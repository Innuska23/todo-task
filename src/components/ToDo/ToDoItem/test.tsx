import ToDoItem from './ToDoItem'
import { render, screen, fireEvent } from '@testing-library/react'

describe('<ToDoItem />', () => {
  const todo = {
    id: '1',
    text: 'Example Todo',
    isDone: false
  }

  it('should call onComplete when Complete button is clicked', () => {
    const handleComplete = vi.fn()
    const handleDelete = vi.fn()

    render(
      <ToDoItem
        todo={todo}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    )

    const completeButton = screen.getByText(/Unfulfilled/i)
    fireEvent.click(completeButton)

    expect(handleComplete).toHaveBeenCalledWith({ ...todo, isDone: true })
    expect(handleDelete).not.toHaveBeenCalled()
  })
})
