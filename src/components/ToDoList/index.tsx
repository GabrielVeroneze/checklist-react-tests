import './todo-list.style.css'

interface ToDoListProps {
    children: React.ReactNode
}

export function ToDoList({ children }: ToDoListProps) {
    return <ul className="todo-list">{children}</ul>
}
