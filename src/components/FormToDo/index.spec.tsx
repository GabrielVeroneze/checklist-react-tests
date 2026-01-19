import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    test('deveria enviar o form com a descrição atualizada', async () => {
        const funcaoSimulandoSubmit = jest.fn()
        const { getByRole } = render(
            <FormToDo onSubmit={funcaoSimulandoSubmit} />,
        )

        const input = getByRole('textbox')
        await userEvent.clear(input)
        await userEvent.type(input, 'Um novo curso para estudar')

        const button = getByRole('button', { name: /Salvar item/i })
        await userEvent.click(button)

        expect(funcaoSimulandoSubmit).toHaveBeenCalled()
    })
})
