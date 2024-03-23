import React, { type ReactElement } from 'react'

const CollectionItemSkeleton = (): ReactElement => {
  return (
    <div className="collection">
      <img className="collection__big skeleton" alt=""/>
      <div className="collection__bottom">
        <img className="collection__mini skeleton" alt=""/>
        <img className="collection__mini skeleton" alt=""/>
        <img className="collection__mini skeleton" alt=""/>
      </div>
      <h4 className="skeleton__text"></h4>
    </div>
  )
}

export default CollectionItemSkeleton
