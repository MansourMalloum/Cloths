import { createSelector } from "reselect";
const selectDirectory = state => state.sections;

export const selectDirectorySection = createSelector(
  [selectDirectory],
  sections => sections.sections
);
