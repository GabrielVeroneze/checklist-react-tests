import './todo-list.module.css'

interface ToDoListProps {
    children: React.ReactNode
}

const ToDoList = ({ children }: ToDoListProps) => {
    return <ul className="todo-list">{children}</ul>
}

export default ToDoList
