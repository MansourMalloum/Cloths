import React from "react";
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.component.scss';


const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items.filter((item, idx)=> idx < 4).map(({id, ...othersProps}) => {
        return <CollectionItem key={id} {...othersProps}/>
      })}
    </div>
  </div>
);

export default CollectionPreview;