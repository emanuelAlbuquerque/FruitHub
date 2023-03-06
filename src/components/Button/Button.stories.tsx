import { StoryObj, Meta } from '@storybook/react'
import { Button, IButton } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'secondary'],
      control: { type: 'radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' }
    },
    className: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
} as Meta<IButton>

export const Default: StoryObj<IButton> = {
  args: {
    variant: 'default',
    children: 'Ola mundo'
  }
}

export const Secondary: StoryObj<IButton> = {
  args: {
    children: 'Ola mundo',
    variant: 'secondary'
  }
}

export const Disabled: StoryObj<IButton> = {
  args: {
    children: 'Ola mundo',
    variant: 'default',
    disabled: true
  }
}
