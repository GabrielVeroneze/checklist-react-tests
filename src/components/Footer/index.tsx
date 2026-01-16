import styles from './footer.module.css'

interface FooterProps {
    children: React.ReactNode
}

const Footer = ({ children }: FooterProps) => {
    return <footer className={styles.footer}>{children}</footer>
}

export default Footer
