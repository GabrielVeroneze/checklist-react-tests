import { useTodo } from '@/context/todo/useTodo'
import { IconPlus, IconSchool } from '@/components/icons'
import ChecklistsWrapper from '@/components/ChecklistsWrapper'
import Container from '@/components/Container'
import Dialog from '@/components/Dialog'
import FabButton from '@/components/FabButton'
import Footer from '@/components/Footer'
import FormToDo from '@/components/FormToDo'
import Header from '@/components/Header'
import Heading from '@/components/Heading'
import ToDoGroup from '@/components/ToDoGroup'
import ToDoCount from '@/components/ToDoCount'

const Home = () => {
    const {
        todos,
        upsertTodo,
        openTodoFormModal,
        closeTodoFormModal,
        isModalOpen,
        isLoading,
    } = useTodo()

    return (
        <main>
            <Container>
                <Header>
                    <Heading>
                        <IconSchool /> Plano de estudos
                        <ToDoCount />
                    </Heading>
                </Header>

                <ChecklistsWrapper>
                    <ToDoGroup
                        heading="Para estudar"
                        todos={todos.filter((t) => !t.completed)}
                        isLoading={isLoading}
                    />
                    <ToDoGroup
                        heading="Concluído"
                        todos={todos.filter((t) => t.completed)}
                        isLoading={isLoading}
                    />
                    <Footer>
                        <FabButton onClick={openTodoFormModal}>
                            <IconPlus />
                        </FabButton>
                    </Footer>
                </ChecklistsWrapper>
            </Container>

            <Dialog isOpen={isModalOpen} onClose={closeTodoFormModal}>
                <FormToDo onSubmit={upsertTodo} />
            </Dialog>
        </main>
    )
}

export default Home
