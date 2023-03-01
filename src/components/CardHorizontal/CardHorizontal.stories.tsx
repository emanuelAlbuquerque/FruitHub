import { CardHorizontal, ICardHorizontal } from '.'
import { Meta, StoryObj, Story } from '@storybook/react'

import Prato from '../../assets/img/PratoBarry.svg'
import { useState } from 'react'

export default {
  title: 'Components/CardHorizontal',
  component: CardHorizontal
} as Meta<ICardHorizontal>

export const Default: StoryObj<ICardHorizontal> = {
  args: {
    image: Prato,
    name: 'Honey lime combo',
    price: 2000,
    quantify: 2
  }
}
