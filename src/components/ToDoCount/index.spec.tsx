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

    test('deveria renderizar o contador com itens corretamente ', async () => {
        mockGetTodos.mockResolvedValue([
            {
                id: '9f0d',
                description: 'Teste 1',
                createdAt: '2025-08-22T10:00:00.000Z',
                completed: false,
            },
            {
                id: '2d4g',
                description: 'Teste 2',
                createdAt: '2025-08-22T10:00:00.000Z',
                completed: true,
            },
        ])
        const { findByText } = render(<ToDoCount />)

        const count = await findByText('2')

        expect(count).toBeInTheDocument()
    })
})
