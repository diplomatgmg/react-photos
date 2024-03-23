import React, { type FC, type ReactElement } from 'react'

interface CategoryItemProps {
  name: string
}

const CategoryItem: FC<CategoryItemProps> = ({ name }): ReactElement => {
  return <li>{name}</li>
}

export default CategoryItem
