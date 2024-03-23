import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FilterCollection {
  category: number | ''
  page: number
  limit: number
}

const initialState: FilterCollection = {
  category: '',
  page: 1,
  limit: 3
}

const filterCollectionSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory (state: FilterCollection, action: PayloadAction<number>) {
      const categoryId = action.payload
      state.category = categoryId === 1 ? '' : categoryId
    },
    setPage (state: FilterCollection, action: PayloadAction<number>) {
      state.page = action.payload
    }
  }
})

export const {
  setCategory,
  setPage
} = filterCollectionSlice.actions

export default filterCollectionSlice.reducer
export { type FilterCollection }
