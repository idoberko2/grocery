import { createSelector } from 'reselect';

export const sectionsSelector = state => state.sections;

export const getSectionIds = createSelector(
    [ sectionsSelector ],
    sections => Object.keys(sections)
);

export const getSection = createSelector(
    [ sectionsSelector ],
    sections => sectionId => sections[sectionId]
);

export const getSectionFromBlob = (blob, sectionId) => getSection(blob)(sectionId);
