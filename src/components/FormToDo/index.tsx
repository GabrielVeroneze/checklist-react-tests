import { use } from 'react'
import { TodoContext } from '@/components/TodoProvider/TodoContext'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import './form-todo.module.css'

interface FormToDoProps {
    onSubmit: (formData: FormData) => void | Promise<void>
}

const FormToDo = ({ onSubmit }: FormToDoProps) => {
    const { selectedTodo } = use(TodoContext)

    return (
        <form action={onSubmit} className="form">
            <TextInput
                placeholder="Digite o item que deseja adicionar"
                name="description"
                defaultValue={selectedTodo?.description}
                required
            />
            <Button>Salvar item</Button>
        </form>
    )
}

export default FormToDo
