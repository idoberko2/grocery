import { createSelector } from 'reselect';
import { sectionsSelector, getSectionIds } from './sectionSelectors';
import { textFilterSelector } from './filterSelectors';

export const itemsSelector = state => state.items;
export const activeItemsSelector = state => state.activeItems;

export const getListItems = createSelector(
    [ itemsSelector, activeItemsSelector ],
    (items, activeItems) => Object
        .keys(activeItems)
        .map(itemId => Object.assign({}, items[itemId], activeItems[itemId], {
            id: itemId
        }))
        .reduce((prev, cur) => {
            prev[cur.id] = cur;
            return prev;
        }, {})
);

export const getBlob = createSelector(
    [ sectionsSelector, itemsSelector, activeItemsSelector ],
    (sections, items, activeItems) => ({
        sections,
        items,
        activeItems
    })
);

export const getItem = createSelector(
    [ getListItems ],
    items => itemId => items[itemId]
);

export const getCatalogItem = createSelector(
    [ itemsSelector ],
    items => itemId => items[itemId] // TODO: enrich with isInList
);

const getSectionItemsMap = createSelector(
    [ getListItems ],
    activeItems => Object
        .keys(activeItems)
        .reduce((prev, cur) => {
            const curItem = activeItems[cur];

            if (prev[curItem.sectionId]) {
                prev[curItem.sectionId].push(cur);
            } else {
                prev[curItem.sectionId] = [ cur ];
            }

            return prev;
        }, {})
);

export const getItemIds = createSelector(
    [ getSectionItemsMap, getSectionIds ],
    (sectionItemsMap, sectionIds) => sectionIds.map(sectionId => sectionItemsMap[sectionId])
);

export const getFilteredItemIds = createSelector(
    [ getItemIds, getItem, textFilterSelector ],
    (sectionActiveItemIds, itemGetter, textFilter) => sectionActiveItemIds.map(
        singleSectionItemIds =>
            singleSectionItemIds
                .filter(
                    itemId => itemGetter(itemId)
                        .name
                        .toLowerCase()
                        .indexOf(textFilter.toLowerCase()) >= 0
                )
    )
);

export const getCatalogItemIds = createSelector(
    [ itemsSelector ], items => Object.keys(items)
);

export const getFilteredCatalogItemIds = createSelector(
    [ itemsSelector, getCatalogItemIds, textFilterSelector ],
    (itemsMap, itemIds, textFilter) => itemIds.filter(id => {
        const item = itemsMap[id];

        return item.name.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0;
    })
);

export const isItemChecked = createSelector(
    [ activeItemsSelector ],
    activeItems => itemId => activeItems[itemId].isChecked
);

export const getItemFromBlob = (blob, sectionId, itemId) => getItem(blob)(itemId);
export const getCatalogItemFromBlob = (blob, sectionId, itemId) => getCatalogItem(blob)(itemId);
