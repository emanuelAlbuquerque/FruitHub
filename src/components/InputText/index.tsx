import { InputHTMLAttributes, useState } from "react"
import { ContainerInputText } from "./style"

export interface IinputText extends InputHTMLAttributes<HTMLInputElement>{
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
}

export const InputText = ({ placeholder, type = 'text', value, onChange, ...props }: IinputText) => {

  return (
    <ContainerInputText
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}