import './button.css'

interface ButtonProps {
    action?: () => void
}

export const Button = ({ action }: ButtonProps) => {
    return (
        <div className="button" onClick={() => action}>Add</div>
    )
}