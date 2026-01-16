import styles from './container.module.css'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <section className={styles.container}>{children}</section>
}

export default Container
