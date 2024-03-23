import React, { type ReactElement } from 'react'
import CollectionItem from './CollectionItem'
import { useGetPhotosQuery } from '../redux/api'
import { useAppSelector } from '../redux/hooks'
import CollectionItemSkeleton from './CollectionItemSkeleton'

const CollectionList = (): ReactElement => {
  const { selectedCategoryId, searchValue } = useAppSelector(state => state.collection)
  const { data: collection = [], isLoading, isFetching, isError } = useGetPhotosQuery({ category: selectedCategoryId === 1 ? '' : selectedCategoryId })

  if (isError) {
    return <h1 style={{ marginTop: '32px' }}>Нет коллекций.</h1>
  }

  const renderSkeleton = (): ReactElement => (
    <>
      {Array.from({ length: 8 }).map((_, index) => <CollectionItemSkeleton key={index}/>)}
    </>
  )

  const renderCollection = (): ReactElement => {
    const filterCollection = collection.filter(({ name }) => searchValue === '' || name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
      <>
        {filterCollection.map(({ id, name, images }) => <CollectionItem key={id} name={name} images={images}/>)}
      </>
    )
  }

  return (
    <div className="content">
      {isLoading || isFetching ? renderSkeleton() : renderCollection()}
    </div>
  )
}

export default CollectionList
