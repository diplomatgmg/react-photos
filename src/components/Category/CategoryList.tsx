import React, { type ReactElement } from 'react'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../../redux/api'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import CategoryItemSkeleton from './CategoryItemSkeleton'
import { setCategory, setPage } from '../../redux/filterCollectionSlice'

const CategoryList = (): ReactElement => {
  const selectedCategoryId = useAppSelector(state => state.filterCollection.category)

  const dispatch = useAppDispatch()

  const {
    data: categories,
    isLoading
  } = useGetCategoriesQuery({})

  const handleSelectCategory = (categoryId: number): void => {
    dispatch(setCategory(categoryId))
    dispatch(setPage(1))
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
            selectedCategory={selectedCategoryId === '' ? 1 : selectedCategoryId}
            handleSelectCategory={handleSelectCategory}
          />
            ))
          )}
    </ul>
  )
}

export default CategoryList
