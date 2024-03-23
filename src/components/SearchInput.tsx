import React, { type ChangeEvent, type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setSearchValue } from '../redux/collectionSlice'

const SearchInput = (): ReactElement => {
  const searchValue = useAppSelector(state => state.collection.searchValue)

  const dispatch = useAppDispatch()

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchValue(e.target.value))
  }

  return <input onChange={handleInputValue} value={searchValue} className="search-input" placeholder="Поиск по названию"/>
}

export default SearchInput
