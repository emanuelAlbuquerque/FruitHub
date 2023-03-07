import { InputText, IinputText } from '.'
import { Meta, StoryObj, Story } from '@storybook/react'
import { useState } from 'react'
import { PasswordIcon } from 'assets/Icons/PasswordIcon'

export default {
  title: 'Components/InputText',
  component: InputText,
  argTypes: {
    variant: {
      options: ['inputForm', 'inputText'],
      control: { type: 'radio' }
    },
    error: {
      options: [true, false],
      control: { type: 'radio' }
    },
    value: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    iconForm: {
      table: {
        disable: true
      }
    }
  }
} as Meta<IinputText>

const Tamplate: Story<IinputText> = args => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return <InputText {...args} value={value} onChange={handleChange} />
}

export const Default = Tamplate.bind({})
Default.args = {
  placeholder: 'Olá mundo',
  type: 'text'
}

export const InputForm = Tamplate.bind({})
InputForm.args = {
  placeholder: 'Olá mundo',
  type: 'text',
  variant: 'inputForm',
  iconForm: <PasswordIcon />
}

export const Error = Tamplate.bind({})
Error.args = {
  placeholder: 'Olá mundo',
  type: 'text',
  variant: 'inputForm',
  iconForm: <PasswordIcon />,
  error: true
}
