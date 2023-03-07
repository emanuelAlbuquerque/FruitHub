import { StoryObj, Meta } from '@storybook/react'
import { AssemblyDouble, IAssemblyDouble } from '.'

export default {
  title: 'Components/Assemblys',
  component: AssemblyDouble,
  argTypes: {
    handleClickButtonRight: { action: 'handleClickButtonRight' },
    handleClickButtonLeft: { action: 'handleClickButtonLeft' }
  }
} as Meta<IAssemblyDouble>

export const Double: StoryObj<IAssemblyDouble> = {
  args: {
    textButtonLeft: 'Pay on delivery',
    textButtonRight: 'Pay with card'
  }
}
