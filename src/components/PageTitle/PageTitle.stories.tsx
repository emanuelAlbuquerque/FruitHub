import { PageTitle, IPageTitle } from '.'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
  argTypes: { handleClickBack: { action: 'Back' } }
} as Meta<IPageTitle>

export const Default: StoryObj<IPageTitle> = {
  args: {
    text: 'My Basket'
  }
}
