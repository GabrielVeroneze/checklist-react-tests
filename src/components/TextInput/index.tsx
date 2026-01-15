import './input.style.css'

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = (props: TextInputProps) => {
    return <input {...props} className="input" />
}

export default TextInput
