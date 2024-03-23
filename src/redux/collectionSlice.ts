import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

interface CollectionState {
  searchValue: string
}

const initialState: CollectionState = {
  searchValue: ''
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers
})

export const {
  setSearchValue
} = collectionSlice.actions

export default collectionSlice.reducer
export { type CollectionState }
