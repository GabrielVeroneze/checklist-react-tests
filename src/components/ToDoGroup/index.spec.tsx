import { render } from '@testing-library/react'
import ToDoGroup from './index'

describe('ToDoGroup', () => {
    test('deveria renderizar o componente corretamente', () => {
        const { getByText, queryAllByRole } = render(
            <ToDoGroup todos={[]} heading="Teste" />,
        )

        expect(getByText('Teste')).toBeInTheDocument()
        expect(queryAllByRole('listitem')).toHaveLength(0)
    })

    test('deveria renderizar os itens do grupo corretamente', () => {
        const items = [
            {
                id: '9d7a',
                description: 'Estudar React',
                createdAt: '2025-08-22T10:00:00.000Z',
                completed: false,
            },
            {
                id: '2q8d',
                description: 'Estudar Jest',
                createdAt: '2025-08-22T11:00:00.000Z',
                completed: true,
            },
        ]
        const { getByText, queryAllByRole } = render(
            <ToDoGroup todos={items} heading="Teste" />,
        )

        const todoItem1 = getByText('Estudar React')
        const todoItem2 = getByText('Estudar Jest')

        expect(queryAllByRole('listitem')).toHaveLength(2)
        expect(todoItem1).toBeInTheDocument()
        expect(todoItem2).toBeInTheDocument()
    })
})
