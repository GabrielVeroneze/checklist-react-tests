import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoProvider } from '@/components/TodoProvider'
import AppRoutes from '@/routes'
import '@/styles/global.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TodoProvider>
            <AppRoutes />
        </TodoProvider>
    </StrictMode>,
)
