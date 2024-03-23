import React, { type ReactElement } from 'react'
import CollectionItem from './CollectionItem'
import { useGetPhotosQuery } from '../../redux/api'
import { useAppSelector } from '../../redux/hooks'
import CollectionItemSkeleton from './CollectionItemSkeleton'

const CollectionList = (): ReactElement => {
  const { searchValue } = useAppSelector(state => state.collection)
  const filterData = useAppSelector(state => state.filterCollection)

  const { data: collection = [], isLoading, isFetching, isError } = useGetPhotosQuery(filterData)

  if (isError || collection.length === 0) {
    return <h1>Нет коллекций.</h1>
  }

  const renderSkeleton = (): ReactElement => (
    <>
      {[...Array(3)].map((_, index) => <CollectionItemSkeleton key={index}/>)}
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
