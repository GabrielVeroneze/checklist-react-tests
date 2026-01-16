import { createContext } from 'react'
import type { Todo } from '@/types/Todo'

interface TodoContextData {
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

const defaultValue: TodoContextData = {
    todos: [],
    upsertTodo: async () => {},
    removeTodo: async () => {},
    toggleItemCompleted: () => {},
    openTodoFormModal: () => {},
    closeTodoFormModal: () => {},
    selectTodoForEdit: () => {},
    isModalOpen: false,
    selectedTodo: null,
}

export const TodoContext = createContext<TodoContextData>(defaultValue)
TodoContext.displayName = 'Todo'
