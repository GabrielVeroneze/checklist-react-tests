import './fab-button.style.css'

interface FabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const FabButton = ({ children, ...rest }: FabButtonProps) => {
    return (
        <button className="fab" {...rest}>
            {children}
        </button>
    )
}

export default FabButton
