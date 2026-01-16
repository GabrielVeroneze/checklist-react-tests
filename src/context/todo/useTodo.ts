import { use } from 'react'
import { TodoContext } from './TodoContext'

export function useTodo() {
    const context = use(TodoContext)

    if (!context) {
        throw new Error('useTodo deve ser usado dentro de um TodoProvider')
    }

    return context
}
