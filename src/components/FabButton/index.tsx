import styles from './fab-button.module.css'

interface FabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const FabButton = ({ children, ...rest }: FabButtonProps) => {
    return (
        <button className={styles.fab} {...rest}>
            {children}
        </button>
    )
}

export default FabButton
