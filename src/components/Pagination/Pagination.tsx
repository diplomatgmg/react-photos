import React, { type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import PageItem from './PageItem'
import { setPage } from '../../redux/filterCollectionSlice'

const Pagination = (): ReactElement => {
  const { page } = useAppSelector(state => state.filterCollection)

  const dispatch = useAppDispatch()

  const handleChangePage = (page: number): void => {
    dispatch(setPage(page))
  }

  return (
   <ul className="pagination">
     {[...Array(5)].map((_, index) => (
       <PageItem key={index}
                 page={index + 1}
                 currentPage={page}
                 onClick={handleChangePage} />
     ))}
   </ul>
  )
}

export default Pagination
