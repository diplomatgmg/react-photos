import { type CollectionState } from './collectionSlice'
import { type PayloadAction } from '@reduxjs/toolkit'

export default {
  setSearchValue (state: CollectionState, action: PayloadAction<string>) {
    state.searchValue = action.payload
  }
}