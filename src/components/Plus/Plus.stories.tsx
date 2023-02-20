import { StoryObj, Meta } from '@storybook/react';
import { Plus, IPlus } from '.';

export default {
  title: 'Components/Plus',
  component: Plus,
  argTypes: {
    variant: {
      options: ['large', 'small'],
      control: {type: 'radio'}
    }
  }
} as Meta<IPlus>;

export const Default: StoryObj<IPlus> = {
  args: {
    variant: 'large',
  },
}

export const Secondary: StoryObj<IPlus> = {
  args: {
    variant: 'small'
  }
}