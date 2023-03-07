import { StoryObj, Meta } from '@storybook/react'
import { AssemblyDatails, IAssemblyDatails } from '.'

export default {
  title: 'Components/Assemblys',
  component: AssemblyDatails,
  argTypes: { handleClick: { action: 'checkout' } }
} as Meta<IAssemblyDatails>

export const Datails: StoryObj<IAssemblyDatails> = {
  args: {
    textButton: 'Checkout',
    price: 2000
  }
}
