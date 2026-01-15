import { useEffect, useState } from 'react'
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from '../../services/TodoService'
import { TodoContext } from './TodoContext'
import type { Todo } from '@/types/Todo'

interface TodoProviderProps {
    children: React.ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)

    useEffect(() => {
        const fetchTodos = async () => {
            const todosFromApi = await getTodos()
            setTodos(todosFromApi)
        }

        fetchTodos()
    }, [])

    const upsertTodo = async (formData: FormData): Promise<void> => {
        const description = formData.get('description')

        if (!description || typeof description !== 'string') {
            return
        }

        if (selectedTodo) {
            const updatedTodo = {
                ...selectedTodo,
                description,
            }

            setTodos((oldState) =>
                oldState.map((item) =>
                    item.id === selectedTodo.id ? updatedTodo : item,
                ),
            )

            await updateTodo(updatedTodo)
        } else {
            const newTodo = {
                description,
                createdAt: new Date().toISOString(),
                completed: false,
            }

            const createdTodo = await createTodo(newTodo)
            setTodos((oldState) => [...oldState, createdTodo])
        }

        closeTodoFormModal()
    }

    const removeTodo = async (todo: Todo): Promise<void> => {
        setTodos((oldState) => oldState.filter((t) => t.id !== todo.id))
        await deleteTodo(todo.id)
    }

    const toggleItemCompleted = (todo: Todo): void => {
        setTodos((oldState) =>
            oldState.map((item) =>
                item.id === todo.id
                    ? { ...item, completed: !item.completed }
                    : item,
            ),
        )
    }

    const openTodoFormModal = (): void => {
        setShowDialog(true)
    }

    const closeTodoFormModal = (): void => {
        setShowDialog(false)
        setSelectedTodo(null)
    }

    const selectTodoForEdit = (todo: Todo): void => {
        setSelectedTodo(todo)
        openTodoFormModal()
    }

    return (
        <TodoContext
            value={{
                todos,
                upsertTodo,
                removeTodo,
                toggleItemCompleted,
                openTodoFormModal,
                closeTodoFormModal,
                isModalOpen: showDialog,
                selectTodoForEdit,
                selectedTodo,
            }}
        >
            {children}
        </TodoContext>
    )
}
