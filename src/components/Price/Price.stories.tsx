import { StoryObj, Meta } from '@storybook/react'
import { Price, IPrice } from '.'

export default {
  title: 'Components/Price',
  component: Price,
  argTypes: {
    variation: {
      options: ['large', 'small', 'default'],
      control: { type: 'radio' }
    }
  }
} as Meta<IPrice>

export const Default: StoryObj<IPrice> = {
  args: {
    // variant: 'large',
    price: 2000,
    variation: 'default'
  }
}
export const Large: StoryObj<IPrice> = {
  args: {
    // variant: 'large',
    price: 2000,
    variation: 'large'
  }
}

export const Small: StoryObj<IPrice> = {
  args: {
    // variant: 'large',
    price: 2000,
    variation: 'small'
  }
}
