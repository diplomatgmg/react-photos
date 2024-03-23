import React, { type FC, type ReactElement } from 'react'
import { type Category } from '../../types'

interface CategoryItemProps {
  category: Category
  selectedCategory: number
  handleSelectCategory: (categoryId: number) => void
}

const CategoryItem: FC<CategoryItemProps> = ({ category, selectedCategory, handleSelectCategory }): ReactElement => {
  return (
    <li className={category.id === selectedCategory ? 'active' : ''}
        onClick={() => handleSelectCategory(category.id)}>
      {category.name}
    </li>
  )
}

export default CategoryItem
