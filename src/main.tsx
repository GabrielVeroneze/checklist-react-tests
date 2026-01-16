import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from '@/context/provider/ContextProvider'
import AppRoutes from '@/routes'
import '@/styles/global.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ContextProvider>
            <AppRoutes />
        </ContextProvider>
    </StrictMode>,
)
