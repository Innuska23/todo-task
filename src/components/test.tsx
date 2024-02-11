import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render the App with header and todo section', () => {
    render(<App />)
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument()
    expect(screen.getByTestId('form')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter a new task/i)).toBeInTheDocument()
  })
})
