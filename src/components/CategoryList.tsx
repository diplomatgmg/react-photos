import React, { type ReactElement } from 'react'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../redux/api'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setSelectedCategoryId } from '../redux/collectionSlice'
import CategoryItemSkeleton from './CategoryItemSkeleton'

const CategoryList = (): ReactElement => {
  const selectedCategoryId = useAppSelector(state => state.collection.selectedCategoryId)
  const dispatch = useAppDispatch()

  const {
    data: categories,
    isLoading
  } = useGetCategoriesQuery({})

  const handleSelectCategory = (categoryId: number): void => {
    dispatch(setSelectedCategoryId(categoryId))
  }

  return (
    <ul className="tags">
      {isLoading
        ? (
            Array.from({ length: 4 }).map((_, index) => <CategoryItemSkeleton key={index} />)
          )
        : (
            categories?.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            selectedCategory={selectedCategoryId}
            handleSelectCategory={handleSelectCategory}
          />
            ))
          )}
    </ul>
  )
}

export default CategoryList
