import './fab-button.style.css'

interface FabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function FabButton({ children, ...rest }: FabButtonProps) {
    return (
        <button className="fab" {...rest}>
            {children}
        </button>
    )
}
