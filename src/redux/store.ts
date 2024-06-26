import { configureStore } from '@reduxjs/toolkit'
import api from './api'
import collectionReducer from './collectionSlice'
import filterCollectionReducer from './filterCollectionSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    collection: collectionReducer,
    filterCollection: filterCollectionReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
