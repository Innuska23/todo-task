import React from 'react'
import { render, screen } from '@testing-library/react'
import ToDoForm from './ToDoForm'

describe('<ToDoForm />', () => {
  const onAdd = vi.fn()

  it('should render only the Add task button', () => {
    render(<ToDoForm onAdd={onAdd} />)
    const form = screen.getByTestId('form')
    expect(form).toBeInTheDocument()
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(1)
    const button = buttons[0]
    expect(button).toHaveTextContent('Add task')
  })
})
