import { Modal, IModal } from '.'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta<IModal>

const Tamplate: Story<IModal> = args => {
  const [expand, setExpand] = useState(true)

  const expandModal = () => {
    setExpand(!expand)
  }

  return (
    <>
      {expand && (
        <Modal handleClickCloseModal={expandModal}>
          <h1>{args.children}</h1>
        </Modal>
      )}

      {!expand && <button onClick={expandModal}>Expand</button>}
    </>
  )
}

export const Default = Tamplate.bind({})
Default.args = {
  children: 'Hello Word'
}
