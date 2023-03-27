import { ReactNode } from 'react'
import { ContainerStyleModal } from './style'

export interface IModal {
  handleClickCloseModal: () => void
  children: ReactNode
}

export const Modal = ({ handleClickCloseModal, children }: IModal) => {
  return (
    <ContainerStyleModal>
      <div className="button-close_modal">
        <button onClick={handleClickCloseModal}>X</button>
      </div>
      <div className="modal_container">{children}</div>
    </ContainerStyleModal>
  )
}
