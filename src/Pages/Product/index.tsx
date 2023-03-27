import { IconHeart } from 'assets/Icons/Heart'
import { AssemblyDuo } from 'components/Assemblys/Duo'
import { Back } from 'components/Back'
import { CardContain } from 'components/CardContain'
import { Counter } from 'components/Counter'
import { Price } from 'components/Price'
import { Title } from 'components/Title'
import { useState } from 'react'
import imgProduct from '../../assets/img/Product.svg'
import { ContainerStylePageProduct } from './style'

export const Product = () => {
  const [counterQtd, setCounterQtd] = useState<number>(1)

  const handleClickAmmountPlus = () => {
    setCounterQtd(qtd => qtd + 1)
  }

  const handleClickAmmountMinus = () => {
    if (counterQtd > 0) {
      setCounterQtd(qtd => qtd - 1)
    }
  }

  return (
    <ContainerStylePageProduct>
      <div className="container_img">
        <div>
          <Back text="Go Back" handleCLickBack={() => console.log('voltei')} />
        </div>
        <div className="img">
          <img src={imgProduct} alt="" />
        </div>
      </div>

      <div className="container_info">
        <div>
          <h1>Quinoa Fruit Salad</h1>
          <div className="container_info-counter">
            <Counter
              variation="large"
              counter={counterQtd}
              handleUpdateAmountAdd={handleClickAmmountPlus}
              handleUpdateAmountMinus={handleClickAmmountMinus}
            />
            <Price price={2000} variation="small" />
          </div>
          <div className="container_list-contain">
            <Title>This combo contains:</Title>
            <ul>
              <li>
                <CardContain text="Red Quinoa" />
              </li>
              <li>
                <CardContain text="Red Quinoa" />
              </li>
              <li>
                <CardContain text="Red Quinoa" />
              </li>
              <li>
                <CardContain text="Red Quinoa" />
              </li>
            </ul>
          </div>
          <p className="container_info-description">
            If you are looking for a new fruit salad to eat today, quinoa is the
            perfect brunch
          </p>
        </div>
        <AssemblyDuo
          textButtonLarge="Add to Basket"
          iconButtonSmall={<IconHeart />}
          handleClickButtonLarge={() => console.log('Add to Bascket')}
          handleClickButtonSmall={() => console.log('Add to Fav')}
          className="button"
        />
      </div>
    </ContainerStylePageProduct>
  )
}
