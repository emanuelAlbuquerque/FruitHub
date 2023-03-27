import { Button } from 'components/Button'
import { ContainerStylePageOrderComplete } from './style'

import Complete from '../../assets/img/complete.svg'

export const OrderComplete = () => {
  return (
    <ContainerStylePageOrderComplete>
      <img src={Complete} alt="Imagem de complete" />
      <h1 className="title">Order Taken </h1>
      <p>Your order have been taken and is being attended to</p>
      <div className="button_default">
        <Button onClick={() => console.log('Comprei')}>Track order</Button>
      </div>
      <div className="button_secondary">
        <Button
          variant="secondary"
          onClick={() => console.log('Voltei para ver mais')}
        >
          Continue shopping
        </Button>
      </div>
    </ContainerStylePageOrderComplete>
  )
}
