import type { Todo } from '@/types/Todo'

const baseURL = 'http://localhost:3001/todos'

export const getTodos = async (): Promise<Todo[]> => {
    const response = await fetch(baseURL)
    return response.json()
}

export const updateTodo = async (todo: Todo): Promise<Todo> => {
    const response = await fetch(`${baseURL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    return response.json()
}

export const createTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    return response.json()
}

export const deleteTodo = async (id: Todo['id']): Promise<void> => {
    await fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
    })
}
