import { useState } from "@storybook/addons";
import { Meta, Story } from "@storybook/react";
import { ISearch, Search } from ".";

export default {
  title: 'components/Search',
  component: Search
} as Meta<ISearch>

const Tamplate: Story<ISearch> = (args) => {

  const [value, setValue] = useState<string>('')

  const handleChangeSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Search
      value={value}
      onChangeSetValue={handleChangeSetValue}
      placeholder={args.placeholder}
    />
  )
}

export const Default = Tamplate.bind({})
Default.args = {
  placeholder: 'Search for fruit salad combos',
  
}