import { AppBar, IAppBar } from ".";
import { Meta, Story } from "@storybook/react";
import { Menu } from "assets/Icons/Menu";

export default {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {
    iconLeft: {
      table: {
        disable: true
      }
    }// Apaga algum control
  }
} as Meta<IAppBar>

const Tamplate: Story<IAppBar> = (args) => {

  const handleOnCLickBesket = () => {
    console.log('Abre a mochila com os itens do usuário')
  }

  const handleOnClickIconLeft = () => {
    console.log('Funcionalidade do icone a esquerda, que por default é o de menu')
  }


  return (
    <AppBar
      onClickBasket={handleOnCLickBesket}
      onClickIconLeft={handleOnClickIconLeft}
      {...args}
    />
  )
}

export const Default = Tamplate.bind({})
Default.args = {
  nameUser: 'Emanuel',
  iconLeft: (
    <Menu />
  )
}