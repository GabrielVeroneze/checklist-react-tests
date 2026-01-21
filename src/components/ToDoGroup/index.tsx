import type { Todo } from '@/types/Todo'
import SubHeading from '@/components/SubHeading'
import ToDoItem from '@/components/ToDoItem'
import ToDoList from '@/components/ToDoList'
import styles from './todo-group.module.css'

interface ToDoGroupProps {
    heading: string
    todos: Todo[]
    isLoading: boolean
}

const ToDoGroup = ({ todos, heading, isLoading }: ToDoGroupProps) => {
    const renderContent = () => {
        if (isLoading) {
            return <p className={styles.text}>Carregando...</p>
        }

        if (todos.length === 0) {
            return <p className={styles.text}>Nenhum item encontrado</p>
        }

        return (
            <ToDoList>
                {todos.map((todo) => {
                    return <ToDoItem key={todo.id} item={todo} />
                })}
            </ToDoList>
        )
    }

    return (
        <>
            <SubHeading>{heading}</SubHeading>
            {renderContent()}
        </>
    )
}

export default ToDoGroup
