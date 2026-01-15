import './container.style.css'

interface ContainerProps {
    children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
    return <section className="container">{children}</section>
}
