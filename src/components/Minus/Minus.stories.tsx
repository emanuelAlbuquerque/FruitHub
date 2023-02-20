import { StoryObj, Meta } from '@storybook/react';
import { Minus, IMinus } from '.';

export default {
  title: 'Components/Minus',
  component: Minus,
  argTypes: {
    variant: {
      options: ['large', 'small'],
      control: {type: 'radio'}
    }
  }
} as Meta<IMinus>;

export const Default: StoryObj<IMinus> = {
  args: {
    variant: 'large',
  },
}

export const Secondary: StoryObj<IMinus> = {
  args: {
    variant: 'small'
  }
}