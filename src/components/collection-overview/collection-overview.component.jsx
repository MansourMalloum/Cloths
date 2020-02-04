import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => {
  return collections.map(({ id, ...otherProps }) => {
    return <CollectionPreview key={id} {...otherProps} />;
  });
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
