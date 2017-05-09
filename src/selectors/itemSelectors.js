import { createSelector } from 'reselect';
import { sectionsSelector, getSectionIds } from './sectionSelectors';
import { textFilterSelector } from './filterSelectors';

export const itemsSelector = state => state.items;

export const getItemIds = createSelector(
    [ itemsSelector, getSectionIds ],
    (items, sectionIds) => sectionIds.map(sectionId => Object.keys(items[sectionId]))
);

export const getBlob = createSelector(
    [ sectionsSelector, itemsSelector ],
    (sections, items) => ({
        sections,
        items
    })
);

export const getItem = createSelector(
    [itemsSelector],
    items => (sectionId, itemId) => items[sectionId][itemId]
);

export const getFilteredItemIds = createSelector(
    [ sectionsSelector, getSectionIds, getItem, textFilterSelector ],
    (sections, sectionIds, itemGetter, textFilter) => sectionIds.map(
        sectionId =>
            sections[sectionId]
                .itemIds
                .filter(
                    itemId =>
                    itemGetter(sectionId, itemId)
                        .name
                        .toLowerCase()
                        .indexOf(textFilter.toLowerCase()) >= 0
                )
    )
);

export const isItemChecked = createSelector(
    [getItem],
    getItemById => (sectionId, itemId) => getItemById(sectionId, itemId).isChecked
);

export const getItemFromBlob = (blob, sectionId, itemId) => getItem(blob)(sectionId, itemId);
