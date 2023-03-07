import { InputHTMLAttributes, ReactNode, useRef } from 'react'
import { ContainerInput } from './style'

export interface IinputText extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  variant?: 'inputText' | 'inputForm'
  error?: boolean
  iconForm?: ReactNode
}

export const InputText = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  variant = 'inputText',
  iconForm,
  error,
  ...props
}: IinputText) => {
  const refIpunt = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleClickInputFocus = () => {
    refIpunt.current.focus()
  }

  return (
    <ContainerInput variant={variant} error={error}>
      {variant === 'inputForm' && (
        <div className="icon" onClick={handleClickInputFocus}>
          {iconForm}
        </div>
      )}
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        ref={refIpunt}
        {...props}
      />
    </ContainerInput>
  )
}
