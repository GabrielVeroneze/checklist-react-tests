import styles from './todo-list.module.css'

interface ToDoListProps {
    children: React.ReactNode
}

const ToDoList = ({ children }: ToDoListProps) => {
    return <ul className={styles['todo-list']}>{children}</ul>
}

export default ToDoList
