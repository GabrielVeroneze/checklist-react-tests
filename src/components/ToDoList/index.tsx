import './todo-list.style.css'

interface ToDoListProps {
    children: React.ReactNode
}

const ToDoList = ({ children }: ToDoListProps) => {
    return <ul className="todo-list">{children}</ul>
}

export default ToDoList
