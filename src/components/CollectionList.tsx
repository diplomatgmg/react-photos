import React, { type ReactElement } from 'react'
import CollectionItem from './CollectionItem'
import { useGetPhotosQuery } from '../redux/api'

const CollectionList = (): ReactElement => {
  const {
    data: collections
  } = useGetPhotosQuery({})

  return (
   <div className="content">
     {collections?.map(({ id, name, images }) => <CollectionItem key={id} name={name} images={images}/>)}
   </div>
  )
}

export default CollectionList
