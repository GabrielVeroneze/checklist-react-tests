import './sub-heading.module.css'

interface SubHeadingProps {
    children: React.ReactNode
}

const SubHeading = ({ children }: SubHeadingProps) => {
    return <h2 className="subheading">{children}</h2>
}

export default SubHeading
