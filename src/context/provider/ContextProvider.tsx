import { TodoProvider } from '@/context/todo/TodoProvider'

interface ContextProviderProps {
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    return <TodoProvider>{children}</TodoProvider>
}
