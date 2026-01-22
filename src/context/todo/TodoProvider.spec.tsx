import { render } from '@testing-library/react'
import { getTodos } from '@/services/TodoService'
import { TodoProvider } from './TodoProvider'

jest.mock('@/services/TodoService')

describe('TodoProvider', () => {
    test('deveria renderizar o provider corretamente buscando os todos ao montar', () => {
        render(<TodoProvider children={undefined} />)

        expect(getTodos).toHaveBeenCalled()
    })
})
