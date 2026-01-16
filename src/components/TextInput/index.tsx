import './input.module.css'

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = (props: TextInputProps) => {
    return <input {...props} className="input" />
}

export default TextInput
