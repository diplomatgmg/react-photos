import React, { type ReactElement } from 'react'
import './style.scss'
import Pagination from './components/Pagination'
import SearchInput from './components/SearchInput'
import CollectionList from './components/CollectionList'
import CategoryList from './components/CategoryList'

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
