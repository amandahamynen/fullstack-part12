import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders the todo text', () => {
  const todo = { _id: '1', text: 'Testing something', done: false }
  const deleteTodo = vi.fn()
  const completeTodo = vi.fn()

  render(
    <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
  )

  expect(screen.getByText('Testing something')).toBeDefined()
})
