import { InputText, IinputText } from ".";
import { Meta, StoryObj, Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: 'Components/InputText',
  component: InputText
} as Meta<IinputText>

const Tamplate: Story<IinputText> = (args) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <InputText {...args} value={value} onChange={handleChange} />
  )
}

export const Default = Tamplate.bind({})
Default.args = {
  placeholder: 'Olá mundo',
}