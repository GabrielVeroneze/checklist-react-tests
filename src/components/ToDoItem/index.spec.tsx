import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToDoItem from './index'

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
})
