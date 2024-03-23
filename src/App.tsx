import React, { type ReactElement } from 'react'
import './style.scss'
import Pagination from './components/Pagination/Pagination'
import SearchInput from './components/SearchInput'
import CollectionList from './components/Collection/CollectionList'
import CategoryList from './components/Category/CategoryList'

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <CategoryList />
        <SearchInput/>
      </div>
      <CollectionList />
      <Pagination />
    </div>
  )
}

export default App
