import { render } from '@testing-library/react'
import ToDoGroup from './index'

describe('ToDoGroup', () => {
    test('deveria renderizar a mensagem de carregando quando isLoading for true', () => {
        const { getByText, queryAllByRole } = render(
            <ToDoGroup todos={[]} isLoading={true} heading="Teste" />,
        )

        expect(getByText('Carregando...')).toBeInTheDocument()
        expect(queryAllByRole('listitem')).toHaveLength(0)
    })

    test('deveria renderizar a mensagem de lista vazia quando não tiver itens', () => {
        const { getByText, queryAllByRole, queryByText } = render(
            <ToDoGroup todos={[]} isLoading={false} heading="Teste" />,
        )

        expect(getByText('Nenhum item encontrado')).toBeInTheDocument()
        expect(queryByText('Carregando...')).toBeNull()
        expect(queryAllByRole('listitem')).toHaveLength(0)
    })

    test.each([
        { isLoading: true, items: [] },
        { isLoading: false, items: [] },
        {
            isLoading: false,
            items: [
                {
                    id: '9d7a',
                    description: 'Estudar React',
                    createdAt: '2025-08-22T10:00:00.000Z',
                    completed: false,
                },
            ],
        },
    ])(
        'deveria renderizar o título da lista o tempo todo',
        ({ isLoading, items }) => {
            const { getByText, queryAllByRole } = render(
                <ToDoGroup
                    todos={items}
                    isLoading={isLoading}
                    heading="Visível o tempo todo"
                />,
            )

            expect(getByText('Visível o tempo todo')).toBeInTheDocument()
            expect(queryAllByRole('listitem')).toHaveLength(items.length)
        },
    )

    test('deveria renderizar o componente corretamente', () => {
        const { getByText, queryAllByRole } = render(
            <ToDoGroup todos={[]} isLoading={false} heading="Teste" />,
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
            <ToDoGroup todos={items} isLoading={false} heading="Teste" />,
        )

        const todoItem1 = getByText('Estudar React')
        const todoItem2 = getByText('Estudar Jest')

        expect(queryAllByRole('listitem')).toHaveLength(2)
        expect(todoItem1).toBeInTheDocument()
        expect(todoItem2).toBeInTheDocument()
    })
})
