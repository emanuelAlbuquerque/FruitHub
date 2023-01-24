import { ContainerStyleSortButton } from "./style"

export interface ISortButton{
  children: string
  onClick: () => void
}

export const SortButton = ({children, onClick}: ISortButton) => {
  return (
    <ContainerStyleSortButton onClick={onClick}>
      {children}
    </ContainerStyleSortButton>
  )
}