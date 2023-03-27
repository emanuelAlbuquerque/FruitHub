import { Sort, ISort } from '.'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Components/Sort',
  component: Sort
} as Meta<ISort>

const Tamplate: Story<ISort> = args => {
  const [sort, setSort] = useState('All')

  const handleClickSetSort = (sort: string) => {
    setSort(sort)
  }

  return (
    <div>
      <Sort
        optionsSort={args.optionsSort}
        handleClickSetSort={handleClickSetSort}
      />
      <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{sort}</p>
    </div>
  )
}

export const Default = Tamplate.bind({})
Default.args = {
  optionsSort: ['All', 'Salad Combo', 'Mange Combo']
}
