import { Back, IBack } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Back',
  component: Back,
  argTypes: { handleCLickBack: { action: 'Back' } }
} as Meta<IBack>

export const Default: StoryObj<IBack> = {
  args: {
    text: 'Go Back'
  }
}
