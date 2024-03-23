import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

interface CollectionState {
  searchValue: string
  selectedCategoryId: number
}

const initialState: CollectionState = {
  searchValue: '',
  selectedCategoryId: 1
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers
})

export const {
  setSearchValue,
  setSelectedCategoryId
} = collectionSlice.actions

export default collectionSlice.reducer
export { type CollectionState }
