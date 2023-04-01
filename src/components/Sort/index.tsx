import { SortButton } from './SortButton'
import { ContainerStyleSort } from './style'

export interface ISort {
  handleClickSetSort: (sort: string) => void
  optionsSort: string[]

  className?: string
}

// O sort vai organizar o array principal com todos os itens. E o itens recomendados, mais quentes, popular, e os novos combos vai ser de acordo com esse array.

export const Sort = ({ handleClickSetSort, optionsSort, className }: ISort) => {
  // O component vai receber por props o array para ser modificado, e vai fazer uma função para ser passado para os botões do sort, pra quando o usuário clicar modificar o array de acordo com a opção clicada. Irá fazer um filter ou um find do array modificado

  return (
    <ContainerStyleSort className={className}>
      {optionsSort.map((sort, i) => (
        <SortButton
          key={`${sort}-${i}`}
          onClick={() => handleClickSetSort(sort)}
        >
          {sort}
        </SortButton>
      ))}
    </ContainerStyleSort>
  )
}
