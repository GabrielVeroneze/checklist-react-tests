import { act, render, waitFor } from '@testing-library/react'
import { getTodos } from '@/services/TodoService'
import { TodoProvider } from './TodoProvider'

jest.mock('@/services/TodoService', () => ({
    getTodos: jest.fn(),
}))

describe('TodoProvider', () => {
    beforeAll(() => {
        jest.useFakeTimers()
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    test('deveria renderizar o provider corretamente buscando os todos ao montar', async () => {
        render(<TodoProvider children={undefined} />)

        act(() => {
            jest.runAllTimers()
        })

        await waitFor(() => expect(getTodos).toHaveBeenCalled())
    })
})
