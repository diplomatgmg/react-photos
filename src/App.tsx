import React, { type ReactElement } from 'react'
import './style.scss'
import PaginationList from './components/Pagination/PaginationList'
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
      <PaginationList />
    </div>
  )
}

export default App
