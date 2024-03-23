import React, { type ReactElement } from 'react'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from '../redux/api'

const CategoryList = (): ReactElement => {
  const {
    data: categories
  } = useGetCategoriesQuery({})

  return (
   <ul className="tags">
     <li className="active">Все</li>
     {categories?.map(({ id, name }) => <CategoryItem key={id} name={name}/>)}
   </ul>
  )
}

export default CategoryList
