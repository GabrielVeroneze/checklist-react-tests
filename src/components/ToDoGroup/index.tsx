import type { Todo } from '@/types/Todo'
import SubHeading from '@/components/SubHeading'
import ToDoItem from '@/components/ToDoItem'
import ToDoList from '@/components/ToDoList'

interface ToDoGroupProps {
    heading: string
    todos: Todo[]
}

const ToDoGroup = ({ todos, heading }: ToDoGroupProps) => {
    return (
        <>
            <SubHeading>{heading}</SubHeading>
            <ToDoList>
                {todos.map((todo) => {
                    return <ToDoItem key={todo.id} item={todo} />
                })}
            </ToDoList>
        </>
    )
}

export default ToDoGroup
