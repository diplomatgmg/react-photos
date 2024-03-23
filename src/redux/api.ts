import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type Category, type Collection } from '../types'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65febaccb2a18489b3867a6b.mockapi.io/'
  }),
  endpoints: (build) => ({
    getCategories: build.query<Category[], unknown>({
      query: () => 'categories'
    }),
    getPhotos: build.query<Collection[], { category?: number | string }>({
      query: (params) => ({
        url: 'photos',
        params
      })
    })
  })
})

export const {
  useGetCategoriesQuery,
  useGetPhotosQuery
} = api

export default api
