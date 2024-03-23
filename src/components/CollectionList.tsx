import React, { type ReactElement } from 'react'
import CollectionItem from './CollectionItem'
import { useGetPhotosQuery } from '../redux/api'
import { useAppSelector } from '../redux/hooks'
import CollectionItemSkeleton from './CollectionItemSkeleton'

const CollectionList = (): ReactElement => {
  const selectedCategoryId = useAppSelector(state => state.collection.selectedCategoryId)

  const searchValue = useAppSelector(state => state.collection.searchValue)

  const {
    data: collection,
    isLoading,
    isFetching,
    isError
  } = useGetPhotosQuery({ category: selectedCategoryId === 1 ? '' : selectedCategoryId })

  if (isError) {
    return <h1 style={{ marginTop: '32px' }}>Нет коллекций.</h1>
  }

  return (
    <div className="content">
      {
        isLoading || isFetching
          ? (
              Array.from({ length: 8 }).map((_, index) => <CollectionItemSkeleton key={index}/>)
            )
          : (
              collection
                ?.filter(({ name }) => searchValue === '' || name.toLowerCase().includes(searchValue.toLowerCase()))
                ?.map(({ id, name, images }) => <CollectionItem key={id} name={name} images={images}/>)
            )
      }
    </div>
  )
}

export default CollectionList
