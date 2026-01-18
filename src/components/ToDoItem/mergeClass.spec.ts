import { mergeClass } from './mergeClass'

jest.mock('./todo-item.module.css', () => ({
    'todo-item': 'todo-item',
    completed: 'completed',
}))

describe('./mergeClass.ts', () => {
    test.each([
        { input: true, output: 'todo-item completed' },
        { input: false, output: 'todo-item' },
    ])(
        'deveria retornar as classes $output quando o item completo for $input',
        ({ input, output }) => {
            const isItemCompleted = input

            const styles = mergeClass(isItemCompleted)

            expect(styles).toBe(output)
        },
    )
})
