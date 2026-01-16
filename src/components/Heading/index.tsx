import './heading.style.css'

interface HeadingProps {
    children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => {
    return <h1 className="heading">{children}</h1>
}

export default Heading
