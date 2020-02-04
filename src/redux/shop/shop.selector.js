import { createSelector } from "reselect";

const collections = state => state.collections;

export const collectionSelector = createSelector(
  [collections],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [collectionSelector],
    collections => collections[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector(
  [collectionSelector],
  collections => Object.keys(collections).map(key => collections[key])
);
