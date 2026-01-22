import { render } from '@testing-library/react'
import ToDoCount from './index'

const mockGetTodos = jest.fn()

jest.mock('@/services/TodoService', () => ({
    getTodos: () => mockGetTodos(),
}))

describe('ToDoCount', () => {
    test('deveria renderizar o componente corretamente ', async () => {
        mockGetTodos.mockResolvedValue([])
        const { findByText } = render(<ToDoCount />)

        const count = await findByText('0')

        expect(count).toBeInTheDocument()
    })
})
