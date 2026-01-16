import './footer.style.css'

interface FooterProps {
    children: React.ReactNode
}

const Footer = ({ children }: FooterProps) => {
    return <footer className="footer">{children}</footer>
}

export default Footer
