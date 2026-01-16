import { useTodo } from '@/context/todo/useTodo'
import { IconPencil, IconTrash } from '@/components/icons'
import type { Todo } from '@/types/Todo'
import './todo-item.module.css'

interface ToDoItemProps {
    item: Todo
}

const ToDoItem = ({ item }: ToDoItemProps) => {
    const { toggleItemCompleted, removeTodo, selectTodoForEdit } = useTodo()

    const styles = ['todo-item']
    if (item.completed) {
        styles.push('completed')
    }

    return (
        <li className={styles.join(' ')}>
            <p className="date">
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className="details">
                <input
                    type="checkbox"
                    className="checkbox"
                    defaultChecked={item.completed}
                    onClick={() => toggleItemCompleted(item)}
                />
                <p className="description">{item.description}</p>
                <div className="actions">
                    <button className="btn" onClick={() => removeTodo(item)}>
                        <IconTrash />
                    </button>
                    <button
                        className="btn"
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
