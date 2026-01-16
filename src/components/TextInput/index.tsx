import styles from './input.module.css'

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = (props: TextInputProps) => {
    return <input {...props} className={styles.input} />
}

export default TextInput
