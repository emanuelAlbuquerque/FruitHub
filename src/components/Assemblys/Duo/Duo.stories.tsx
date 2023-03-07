import { StoryObj, Meta } from '@storybook/react'
import { IconHeart } from 'assets/Icons/Heart'
import { AssemblyDuo, IAssemblyDuo } from '.'

export default {
  title: 'Components/Assemblys',
  component: AssemblyDuo,
  argTypes: {
    handleClickButtonSmall: { action: 'handleClickButtonSmall' },
    handleClickButtonLarge: { action: 'handleClickButtonLarge' },
    iconButtonSmall: {
      table: {
        disable: true
      }
    }
  }
} as Meta<IAssemblyDuo>

export const Duo: StoryObj<IAssemblyDuo> = {
  args: {
    textButtonLarge: 'Add To Basket',
    iconButtonSmall: <IconHeart />
  }
}
