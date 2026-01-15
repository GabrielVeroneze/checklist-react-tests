import './footer.style.css'

interface FooterProps {
    children: React.ReactNode
}

export function Footer({ children }: FooterProps) {
    return <footer className="footer">{children}</footer>
}
