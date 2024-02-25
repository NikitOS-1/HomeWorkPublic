import './input.css'

interface InputProps {
  value: string
  onChange: (e: string) => void
}

export const Input = ({ onChange, value }: InputProps) => {

  return <input className='input' onChange={(e) => onChange(e.target.value)} value={value} placeholder='Add new task' />
};
