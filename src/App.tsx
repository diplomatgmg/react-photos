import React, { type ReactElement } from 'react'
import CollectionItem from './components/CollectionItem'

import './style.scss'
import { useGetCategoriesQuery, useGetPhotosQuery } from './redux/api'

const App = (): ReactElement => {
  const {
    data: categories
  } = useGetCategoriesQuery({})

  const {
    data: collections
  } = useGetPhotosQuery({})

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          {categories?.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
        <input className="search-input" placeholder="Поиск по названию"/>
      </div>
      <div className="content">
        {collections?.map(({ id, name, images }) => <CollectionItem key={id} name={name} images={images} />)}
        {/* {photos?.map(({ id, name, images }) => <Collection key={id} name={name} images={images}/>)} */}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App
