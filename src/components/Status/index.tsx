import { Confirm } from 'assets/Icons/Confirm'
import { Telephone } from 'assets/Icons/Telephone'
import { AnimationProcessing, ContainerStyleStatus, Processing } from './style'

export interface IStatus {
  variations: 'accepted' | 'error' | 'processing' | 'delivery'
  img: string
  text: string
}

export const Status = ({ variations, img, text }: IStatus) => {
  return (
    <ContainerStyleStatus variations={variations}>
      <div className="status_info">
        <img src={img} alt="" />
        <p>{text}</p>
      </div>

      {variations === 'processing' && (
        <AnimationProcessing>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </AnimationProcessing>
      )}

      {variations === 'accepted' && (
        <div className="status_checked">
          <Confirm />
        </div>
      )}

      {variations === 'error' && (
        <div className="status_checked">
          <Confirm />
        </div>
      )}

      {variations === 'delivery' && (
        <button className="status_delivery">
          <Telephone />
        </button>
      )}
    </ContainerStyleStatus>
  )
}
