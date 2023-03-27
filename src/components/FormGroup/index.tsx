import { InputText } from 'components/InputText'
import { ContainerStyleFormGroup } from './style'

export interface IFormGroup {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  placeholder?: string
  label: string
  name: string
}

export const FormGroup = ({
  label,
  onChange,
  value,
  name,
  placeholder
}: IFormGroup) => {
  return (
    <ContainerStyleFormGroup>
      <label htmlFor={name}>{label}</label>
      <InputText
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
      />
    </ContainerStyleFormGroup>
  )
}
