import { combosProps } from "App"
import { SortButton } from "./SortButton"
import { ContainerStyleSort } from "./style"

export interface ISort{
  setSort: React.Dispatch<React.SetStateAction<string>>
}

// O sort vai organizar o array principal com todos os itens. E o itens recomendados, mais quentes, popular, e os novos combos vai ser de acordo com esse array.

export const Sort = ({ setSort }: ISort) => {
  
  // O component vai receber por props o array para ser modificado, e vai fazer uma função para ser passado para os botões do sort, pra quando o usuário clicar modificar o array de acordo com a opção clicada. Irá fazer um filter ou um find do array modificado
  const optionsSort = ['All', 'Salad Combo', 'Berry Combo', 'Mongo Berry']

  const onClickSetSort = (combo: string) => {
    setSort(combo)
  }

  return (
    <ContainerStyleSort>
      {
        optionsSort.map((sort, i) => (
          <SortButton key={`${sort}-${i}`} onClick={() => onClickSetSort(sort)}>
            {sort}
          </SortButton>
        ))
      }
    </ContainerStyleSort>
  )
}