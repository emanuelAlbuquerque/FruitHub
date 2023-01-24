import { ReactNode } from "react"
import { Basket } from "assets/Icons/Basket"
import { Menu } from "assets/Icons/Menu"
import { ContainerStyleAppBar } from "./style"

export interface IAppBar{
  nameUser: string
  iconLeft?: ReactNode
  onClickBasket?: () => void
  onClickIconLeft?: () => void
}

export const AppBar = ({iconLeft = <Menu />, nameUser, onClickBasket, onClickIconLeft}: IAppBar) => {
  return (
    <ContainerStyleAppBar>
      <div className="containerBar">
        <button onClick={onClickIconLeft}>
          {iconLeft}
        </button>
        <div className="user">
          <p className="welcome">Welcome,</p> 
          <span className="nameUser">{nameUser}</span>
        </div>
      </div>
      <button onClick={onClickBasket} className="basket">
        <Basket />
      </button>
    </ContainerStyleAppBar>
  )
}