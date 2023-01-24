import { Sort, ISort } from ".";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: 'Components/Sort',
  component: Sort,
} as Meta<ISort>

const Tamplate: Story<ISort> = () => {

  const [sort, setSort] = useState('')

  return (
    <Sort setSort={setSort}/>
  )
}

export const Default = Tamplate.bind({})
