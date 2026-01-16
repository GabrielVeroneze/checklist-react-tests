import styles from './header.module.css'

interface HeaderProps {
    children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
    return <header className={styles.header}>{children}</header>
}

export default Header
