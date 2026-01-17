import { mergeClass } from './mergeClass'

jest.mock('./todo-item.module.css', () => ({
    'todo-item': 'todo-item',
    completed: 'completed',
}))

describe('./mergeClass.ts', () => {
    test('deveria retornar a classe base do todo-item quando o item não estiver completo', () => {
        const isItemCompleted = false

        const styles = mergeClass(isItemCompleted)

        expect(styles).toBe('todo-item')
    })

    test('deveria retornar a classe base do todo-item e a classe completed quando o item estiver completo', () => {
        const isItemCompleted = true

        const styles = mergeClass(isItemCompleted)

        expect(styles).toBe('todo-item completed')
    })
})
