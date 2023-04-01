import { Menu } from 'assets/Icons/Menu'
import { AppBar } from 'components/AppBar'
import { CardVertical } from 'components/CardVertical'
import { Search } from 'components/Search'
import { Sort } from 'components/Sort'
import { Title } from 'components/Title'
import { useState } from 'react'
import {
  ContainerHomeCombos,
  ContainerHomeCombosItem,
  ContainerStylePageHome,
  ContainerHomeHeader
} from './style'

import imgPrato from '../../assets/img/pratoBarry.svg'

export const Home = () => {
  const [valueSearch, setValueSearch] = useState<string>('')
  const [sort, setSort] = useState<string>('All')
  const optionsSort = ['All', 'Salad Comb', 'Pepino']

  const handleChangeValueSerach = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value)
  }

  const handleClickSetSort = (sort: string) => {
    setSort(sort)
  }

  console.log(sort)

  return (
    <ContainerStylePageHome>
      <ContainerHomeHeader>
        <AppBar
          iconLeft={<Menu />}
          nameUser="Emanuel"
          onClickBasket={() => console.log('Entrou na mochila')}
          onClickIconLeft={() => console.log('Abriu o menu')}
        />
        <Search
          value={valueSearch}
          onChangeSetValue={handleChangeValueSerach}
          placeholder="Search for fruit salad combos"
        />
      </ContainerHomeHeader>

      <Sort handleClickSetSort={handleClickSetSort} optionsSort={optionsSort} />

      <ContainerHomeCombos>
        <Title>Recommended Combo</Title>
        <ContainerHomeCombosItem>
          <CardVertical
            variation="default"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="default"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="default"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="default"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="default"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
        </ContainerHomeCombosItem>
      </ContainerHomeCombos>

      <ContainerHomeCombos>
        <Title>Recommended Combo</Title>
        <ContainerHomeCombosItem>
          <CardVertical
            variation="small"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="small"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="small"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="small"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
          <CardVertical
            variation="small"
            price={2000}
            nameDish={'Honey lime combo'}
            img={imgPrato}
          />
        </ContainerHomeCombosItem>
      </ContainerHomeCombos>
    </ContainerStylePageHome>
  )
}
