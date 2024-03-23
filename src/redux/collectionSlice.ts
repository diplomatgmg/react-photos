import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CollectionState {
  searchValue: string
}

const initialState: CollectionState = {
  searchValue: ''
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setSearchValue (state: CollectionState, action: PayloadAction<string>) {
      state.searchValue = action.payload
    }
  }
})

export const {
  setSearchValue
} = collectionSlice.actions

export default collectionSlice.reducer
export { type CollectionState }
