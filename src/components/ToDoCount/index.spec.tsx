import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    test('deveria começar com botão desabilitado e número de itens atualizado', async () => {
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
        const { getByRole, getByText } = render(<ToDoCount />)

        const refreshButton = getByRole('button', { name: /refresh/i })

        expect(refreshButton).toBeDisabled()

        await waitFor(() => {
            expect(getByText('2')).toBeInTheDocument()
        })
    })

    test('deveria habilitar o botão após a busca inicial na API', async () => {
        mockGetTodos.mockResolvedValue([
            {
                id: '9f0d',
                description: 'Teste 1',
                createdAt: '2025-08-22T10:00:00.000Z',
                completed: false,
            },
        ])
        const { getByRole, getByText } = render(<ToDoCount />)

        const refreshButton = getByRole('button', { name: /refresh/i })

        await waitFor(() => {
            expect(refreshButton).not.toBeDisabled()
        })

        expect(getByText('1')).toBeInTheDocument()
    })

    test('deveria atualizar o número de itens corretamente após clicar no botão de refresh', async () => {
        mockGetTodos.mockResolvedValueOnce([
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

        const { getByRole, getByText } = render(<ToDoCount />)

        await waitFor(() => {
            expect(getByText('2')).toBeInTheDocument()
        })

        const refreshButton = getByRole('button', { name: /refresh/i })
        expect(refreshButton).not.toBeDisabled()

        mockGetTodos.mockResolvedValueOnce([
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
            {
                id: '3g0a',
                description: 'Teste 3',
                createdAt: '2025-08-22T10:00:00.000Z',
                completed: false,
            },
            {
                id: '5h3a',
                description: 'Teste 4',
                createdAt: '2025-08-22T10:00:00.000Z',
                completed: true,
            },
        ])

        await userEvent.click(refreshButton)

        await waitFor(() => {
            expect(getByText('4')).toBeInTheDocument()
        })

        expect(refreshButton).not.toBeDisabled()
    })
})
