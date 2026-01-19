import { render } from '@testing-library/react'
import FormToDo from './index'

jest.mock('@/context/todo/useTodo', () => ({
    useTodo: () => ({
        selectedTodo: {
            description: 'Descrição do todo selecionado',
        },
    }),
}))

describe('FormToDo', () => {
    test('deveria renderizar o form corretamente', () => {
        const { getByRole } = render(<FormToDo onSubmit={() => {}} />)

        expect(getByRole('form')).toBeInTheDocument()
    })

    test('deveria renderizar a descrição do todo selecionado', () => {
        const { getByRole } = render(<FormToDo onSubmit={() => {}} />)

        expect(getByRole('textbox')).toBeInTheDocument()
        expect(getByRole('textbox')).toHaveValue(
            'Descrição do todo selecionado',
        )
    })
})
