import { Menu } from 'assets/Icons/Menu'
import { AppBar } from 'components/AppBar'
import { CardVertical } from 'components/CardVertical'
import { Search } from 'components/Search'
import { Sort } from 'components/Sort'
import { Title } from 'components/Title'
import { useState } from 'react'
import { ContainerStylePageHome } from './style'

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
      <div>
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
      </div>
      <Sort handleClickSetSort={handleClickSetSort} optionsSort={optionsSort} />
      {/* <Title />
      <div>
        <CardVertical />
      </div>
      <div>
        <CardVertical />
      </div> */}
    </ContainerStylePageHome>
  )
}
