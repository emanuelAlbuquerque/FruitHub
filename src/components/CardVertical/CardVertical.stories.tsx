import { CardVertical, ICardVertical } from '.'
import { Meta, StoryObj } from '@storybook/react'

import Prato from '../../assets/img/PratoBarry.svg'
import { useState } from 'react'

export default {
  title: 'Components/CardVertical',
  component: CardVertical,
  argTypes: {
    variation: {
      options: ['default', 'small'],
      control: { type: 'radio' }
    }
  }
} as Meta<ICardVertical>

export const Default: StoryObj<ICardVertical> = {
  args: {
    img: Prato,
    nameDish: 'Honey lime combo',
    price: 2000,
    variation: 'default'
  }
}

export const Small: StoryObj<ICardVertical> = {
  args: {
    img: Prato,
    nameDish: 'Honey lime combo',
    price: 2000,
    variation: 'small'
  }
}
