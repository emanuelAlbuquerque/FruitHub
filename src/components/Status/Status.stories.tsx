// import { useState } from '@storybook/addons'
import { Meta, StoryObj } from '@storybook/react'
import { Status, IStatus } from '.'
import notedOrder from '../../assets/img/notedOrder.svg'
import ordering from '../../assets/img/ordering.svg'
import orderDelivery from '../../assets/img/orderDelivery.svg'

export default {
  title: 'components/Status',
  component: Status,
  argTypes: {
    variations: {
      options: ['accepted', 'error', 'processing', 'delivery'],
      control: { type: 'radio' }
    }
  }
} as Meta<IStatus>

export const Accepted: StoryObj<IStatus> = {
  args: {
    variations: 'accepted',
    img: notedOrder,
    text: 'Order taken'
  }
}

export const Error: StoryObj<IStatus> = {
  args: {
    variations: 'error',
    img: notedOrder,
    text: 'Order taken'
  }
}

export const Processing: StoryObj<IStatus> = {
  args: {
    variations: 'processing',
    img: ordering,
    text: 'Order is being processed'
  }
}

export const Delivery: StoryObj<IStatus> = {
  args: {
    variations: 'processing',
    img: orderDelivery,
    text: 'Order is being delivered'
  }
}
