import './button.style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className="btn">
            {children}
        </button>
    )
}

export default Button
