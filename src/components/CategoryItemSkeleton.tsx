import React, { type ReactElement } from 'react'

const CategoryItemSkeleton = (): ReactElement => {
  const randomWidth = 50 + (120 - 50) * Math.random()

  return (
    <li className="skeleton" style={{ width: `${randomWidth}px` }}>&ensp;</li>
  )
}

export default CategoryItemSkeleton
