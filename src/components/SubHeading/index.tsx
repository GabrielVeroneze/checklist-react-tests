import './sub-heading.style.css'

interface SubHeadingProps {
    children: React.ReactNode
}

export function SubHeading({ children }: SubHeadingProps) {
    return <h2 className="subheading">{children}</h2>
}
