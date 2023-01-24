import { SortButton, ISortButton } from ".";
import { Meta, Story } from "@storybook/react";

export default {
  title: 'Components/Sort',
  component: SortButton,
} as Meta<ISortButton>

const Tamplate: Story<ISortButton> = (args) => {

  return (
    <SortButton onClick={() => console.log('Adiciona a ordenação dos itens')}>
      {args.children}
    </SortButton>
  )
}

export const SortButtonItem = Tamplate.bind({})
SortButtonItem.args = {
  children: 'All'
}