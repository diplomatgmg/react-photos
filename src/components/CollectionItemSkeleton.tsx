import React, { type ReactElement } from 'react'

const CollectionItemSkeleton = (): ReactElement => {
  return (
    <div className="collection">
      <img className="collection__big skeleton" />
      <div className="collection__bottom">
        <img className="collection__mini skeleton" />
        <img className="collection__mini skeleton"/>
        <img className="collection__mini skeleton"/>
      </div>
      <h4 className="skeleton__text"></h4>
    </div>
  )
}

export default CollectionItemSkeleton
