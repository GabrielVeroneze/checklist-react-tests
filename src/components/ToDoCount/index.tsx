import { useEffect, useState } from 'react'
import { getTodos } from '@/services/TodoService'
import { IconRefresh } from '@/components/icons'
import styles from './todo-count.module.css'

const ToDoCount = () => {
    const [count, setCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchTodos = async () => {
        setIsLoading(true)

        const todosFromApi = await getTodos()
        setCount(todosFromApi.length)

        setIsLoading(false)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div className={styles.container}>
            <span className={styles.count}>{count}</span>
            <button
                disabled={isLoading}
                className={styles.button}
                aria-label="refresh"
                onClick={() => fetchTodos()}
            >
                <IconRefresh />
            </button>
        </div>
    )
}

export default ToDoCount
