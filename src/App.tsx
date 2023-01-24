import { Dollar } from "assets/Icons/Dollar";
import { FilterIcon } from "assets/Icons/FilterIcon";
import { Menu } from "assets/Icons/Menu";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { Search } from "components/Search";
import { Sort } from "components/Sort";
import { useEffect, useState } from "react";
import pratos from 'Utils/itens.json'

export interface combosProps{
  nome: string
  combo: string
}


export function App() {

  const [combos, setItens] = useState<combosProps[]>([
    ...pratos
  ])
  const [sort, setSort] = useState('')

  console.log('redenrizou')

  return (
    <>
      <Sort setSort={setSort} />
      {
        sort === '' || sort === 'All'
          ?
            combos.map((combo, i) => (
              <p key={i}>
                {combo.nome}
              </p>
            ))
          : 
            combos.filter((combo) => combo.combo === sort).map((combo, i) => (
            <p key={i}>
              {combo.nome}
            </p>
          ))
      }
    </>
  )
}
