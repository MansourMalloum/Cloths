import React from "react";

import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../collection-item/collection-item.component";

const Collection = ({ collections }) => {
  const { title, items } = collections;
  console.log(items);

  return (
    <div className='collection-page'>
      <div className='title'>{title}</div>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(Collection);
