import React from 'react'
import './button.css'

interface ButtonProps {
    action: (e: React.MouseEvent) => void
}

export const Button = ({ action }: ButtonProps) => {
    return (
        <div className="button" onClick={(e) => action(e)}>Add</div>
    )
}