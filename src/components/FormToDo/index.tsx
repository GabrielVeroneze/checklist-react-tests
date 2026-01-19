import { useTodo } from '@/context/todo/useTodo'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import styles from './form-todo.module.css'

interface FormToDoProps {
    onSubmit: (formData: FormData) => void | Promise<void>
}

const FormToDo = ({ onSubmit }: FormToDoProps) => {
    const { selectedTodo } = useTodo()

    return (
        <form
            aria-label="formulário de criação de item"
            action={onSubmit}
            className={styles.form}
        >
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
