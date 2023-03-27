import { AssemblyDatails } from 'components/Assemblys/Datails'
import { CardHorizontal } from 'components/CardHorizontal'
import { PageTitle } from 'components/PageTitle'
import { ContainerStylePageBascket } from './style'
import Prato from '../../assets/img/pratoBarry.svg'

export const Bascket = () => {
  return (
    <ContainerStylePageBascket>
      <PageTitle
        text="My Bascket"
        handleClickBack={() => console.log('voltei')}
      />
      <div className="bascket_cards">
        <CardHorizontal
          image={Prato}
          name="Quinoa fruit salad"
          price={20000}
          quantify={2}
          className="card"
        />
        <CardHorizontal
          image={Prato}
          name="Quinoa fruit salad"
          price={20000}
          quantify={2}
          className="card"
        />
        <CardHorizontal
          image={Prato}
          name="Quinoa fruit salad"
          price={20000}
          quantify={2}
          className="card"
        />
        <CardHorizontal
          image={Prato}
          name="Quinoa fruit salad"
          price={20000}
          className="card"
          quantify={2}
        />
      </div>
      <AssemblyDatails
        textButton="Checkout"
        price={60000}
        handleClick={() => console.log('comprei')}
        className={'button'}
      />
    </ContainerStylePageBascket>
  )
}
