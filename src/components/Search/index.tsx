import { FilterIcon } from 'assets/Icons/FilterIcon'
import { SearchIcon } from 'assets/Icons/SearchIcon'
import { MutableRefObject, useRef } from 'react'
import { ContainerSearchStyle } from './style'

export interface ISearch {
  value: string
  onChangeSetValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const Search = ({ onChangeSetValue, placeholder, value }: ISearch) => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  const onClickInputFocus = (): void => {
    inputRef.current.focus()
  }

  return (
    <ContainerSearchStyle>
      <div className="search_input" onClick={onClickInputFocus}>
        <SearchIcon className="search_icon" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChangeSetValue}
          ref={inputRef}
        />
      </div>
      <button className="search_button-filter">
        <FilterIcon />
      </button>
    </ContainerSearchStyle>
  )
}
