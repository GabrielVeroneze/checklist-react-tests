import styles from './button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={styles.btn}>
            {children}
        </button>
    )
}

export default Button
