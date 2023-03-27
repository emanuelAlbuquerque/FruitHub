import { CardContain, ICardContain } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/CardContain',
  component: CardContain
} as Meta<ICardContain>

export const Default: StoryObj<ICardContain> = {
  args: {
    text: 'Manga'
  }
}
