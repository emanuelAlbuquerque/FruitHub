import { FormGroup, IFormGroup } from '.'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { PasswordIcon } from 'assets/Icons/PasswordIcon'

export default {
  title: 'Components/FormGroup',
  component: FormGroup
} as Meta<IFormGroup>

const Tamplate: Story<IFormGroup> = args => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return <FormGroup {...args} value={value} onChange={handleChange} />
}

export const Default = Tamplate.bind({})
Default.args = {
  placeholder: 'Digite Aqui',
  label: 'Informe seu Nome: ',
  name: 'nome'
}
