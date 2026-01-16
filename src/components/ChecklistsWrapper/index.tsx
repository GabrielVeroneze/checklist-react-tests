import './checklists-wrapper.style.css'

interface ChecklistsWrapperProps {
    children: React.ReactNode
}

const ChecklistsWrapper = ({ children }: ChecklistsWrapperProps) => {
    return <section className="wrapper">{children}</section>
}

export default ChecklistsWrapper
