import React, { type ReactElement } from 'react'

const Pagination = (): ReactElement => {
  return (
   <ul className="pagination">
     <li>1</li>
     <li className="active">2</li>
     <li>3</li>
   </ul>
  )
}

export default Pagination
