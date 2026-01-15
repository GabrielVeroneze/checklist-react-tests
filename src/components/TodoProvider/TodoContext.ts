import type { Todo } from '@/types/Todo'
import { createContext } from 'react'

export interface TodoContextData {
    todos: Todo[]
    upsertTodo: (formData: FormData) => Promise<void>
    removeTodo: (todo: Todo) => Promise<void>
    toggleItemCompleted: (todo: Todo) => void
    openTodoFormModal: () => void
    closeTodoFormModal: () => void
    selectTodoForEdit: (todo: Todo) => void
    isModalOpen: boolean
    selectedTodo: Todo | null
}

export const TodoContext = createContext<TodoContextData>({} as TodoContextData)
