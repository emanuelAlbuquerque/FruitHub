import { Button } from 'components/Button'
import { FormGroup } from 'components/FormGroup'
import { ContainerStyleAddCard } from './style'

export interface IAddCard {
  value: {
    endereco: string
    number: string
    date: string
    cvv: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AddCard = ({ value, onChange }: IAddCard) => {
  return (
    <ContainerStyleAddCard>
      <FormGroup
        label="Card holder’s name"
        placeholder="10th avenue, Lekki, Lagos."
        name="endereco"
        value={value.endereco}
        onChange={onChange}
      />
      <FormGroup
        label="Card number"
        placeholder="09090909090"
        name="number"
        value={value.number}
        onChange={onChange}
      />
      <div className="double">
        <FormGroup
          label="Date"
          placeholder="MM/YY"
          name="date"
          value={value.date}
          onChange={onChange}
        />
        <FormGroup
          label="CVV"
          placeholder="000"
          name="cvv"
          value={value.cvv}
          onChange={onChange}
        />
      </div>
      <div className="complete_button">
        <Button onClick={() => console.log('Ola mundo')}>Complete Order</Button>
      </div>
    </ContainerStyleAddCard>
  )
}
