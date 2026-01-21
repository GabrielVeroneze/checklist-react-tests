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
    return (
        <>
            <SubHeading>{heading}</SubHeading>

            {isLoading && <p className={styles.text}>Carregando...</p>}

            {!isLoading && todos.length === 0 && (
                <p className={styles.text}>Nenhum item encontrado</p>
            )}

            {!isLoading && todos.length > 0 && (
                <ToDoList>
                    {todos.map((todo) => {
                        return <ToDoItem key={todo.id} item={todo} />
                    })}
                </ToDoList>
            )}
        </>
    )
}

export default ToDoGroup
