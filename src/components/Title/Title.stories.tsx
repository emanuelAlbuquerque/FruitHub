import { StoryObj, Meta } from '@storybook/react'
import { Title, ITitle } from '.'

export default {
  title: 'Components/Title',
  component: Title
} as Meta<ITitle>

export const Default: StoryObj<ITitle> = {
  args: {
    children: 'Recommended Combo'
  }
}
