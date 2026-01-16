import { useTodo } from '@/context/todo/useTodo'
import { IconPencil, IconTrash } from '@/components/icons'
import type { Todo } from '@/types/Todo'
import styles from './todo-item.module.css'

interface ToDoItemProps {
    item: Todo
}

const ToDoItem = ({ item }: ToDoItemProps) => {
    const { toggleItemCompleted, removeTodo, selectTodoForEdit } = useTodo()

    const itemStyles = [styles['todo-item']]

    if (item.completed) {
        itemStyles.push(styles.completed)
    }

    return (
        <li className={itemStyles.join(' ')}>
            <p className={styles.date}>
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className={styles.details}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    defaultChecked={item.completed}
                    onClick={() => toggleItemCompleted(item)}
                />
                <p className={styles.description}>{item.description}</p>
                <div className={styles.actions}>
                    <button
                        className={styles.btn}
                        onClick={() => removeTodo(item)}
                    >
                        <IconTrash />
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => selectTodoForEdit(item)}
                    >
                        <IconPencil />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ToDoItem
