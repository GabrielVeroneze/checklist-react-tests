import './checklists-wrapper.style.css'

interface ChecklistsWrapperProps {
    children: React.ReactNode
}

export function ChecklistsWrapper({ children }: ChecklistsWrapperProps) {
    return <section className="wrapper">{children}</section>
}
