import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToDoItem from './index'

const mockSelectTodoForEdit = jest.fn()
const mockRemoveTodo = jest.fn()

jest.mock('@/context/todo/useTodo', () => ({
    useTodo: () => ({
        selectTodoForEdit: mockSelectTodoForEdit,
        removeTodo: mockRemoveTodo,
    }),
}))

describe('ToDoItem', () => {
    test('deveria renderizar o item corretamente', () => {
        const item = {
            id: '8d1e',
            description: 'Aprender Jest',
            createdAt: '2025-08-22T11:26:54.388Z',
            completed: false,
        }
        const { getByText, getByRole } = render(<ToDoItem item={item} />)

        expect(getByText('Aprender Jest')).toBeInTheDocument()
        expect(getByText('22/08/2025')).toBeInTheDocument()
        expect(getByRole('checkbox')).not.toBeChecked()
    })

    test('deveria chamar a função selectTodoForEdit quando o botão de editar for clicado', async () => {
        const item = {
            id: '8d1e',
            description: 'Editar Jest',
            createdAt: '2025-08-22T11:26:54.388Z',
            completed: false,
        }
        const { getByRole } = render(<ToDoItem item={item} />)

        const button = getByRole('button', { name: /edit/i })
        await userEvent.click(button)

        expect(mockSelectTodoForEdit).toHaveBeenCalledWith(item)
    })

    test('deveria chamar a função removeTodo quando o botão de deletar for clicado', async () => {
        const item = {
            id: '8d1e',
            description: 'Excluir Jest',
            createdAt: '2025-08-22T11:26:54.388Z',
            completed: false,
        }
        const { getByRole } = render(<ToDoItem item={item} />)

        const button = getByRole('button', { name: /delete/i })
        await userEvent.click(button)

        expect(mockRemoveTodo).toHaveBeenCalledWith(item)
    })
})
