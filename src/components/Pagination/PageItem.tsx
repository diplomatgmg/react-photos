import React, { type FC, type ReactElement } from 'react'

interface PageItemProps {
  page: number
  currentPage: number
  onClick: (newPage: number) => void
}

const PageItem: FC<PageItemProps> = ({ page, onClick, currentPage }): ReactElement => {
  return <li onClick={() => onClick(page)} className={currentPage === page ? 'active' : ''}>{page}</li>
}

export default PageItem
