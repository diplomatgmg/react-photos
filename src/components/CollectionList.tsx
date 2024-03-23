import React, { type ReactElement } from 'react'
import CollectionItem from './CollectionItem'
import { useGetPhotosQuery } from '../redux/api'
import { useAppSelector } from '../redux/hooks'

const CollectionList = (): ReactElement => {
  const searchValue = useAppSelector(state => state.collection.searchValue)

  const {
    data: collections
  } = useGetPhotosQuery({})

  return (
   <div className="content">
     {
       collections
         ?.filter(({ name }) => searchValue === '' || name.toLowerCase().includes(searchValue.toLowerCase()))
         ?.map(({ id, name, images }) => <CollectionItem key={id} name={name} images={images}/>)
     }
   </div>
  )
}

export default CollectionList
