import { useEffect, useState } from 'react'
import { getTodos } from '@/services/TodoService'
import styles from './todo-count.module.css'

const ToDoCount = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const fetchTodos = async () => {
            const todosFromApi = await getTodos()

            setCount(todosFromApi.length)
        }

        fetchTodos()
    }, [])

    return <span className={styles.count}>{count}</span>
}

export default ToDoCount
