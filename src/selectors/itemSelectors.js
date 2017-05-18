import { createSelector } from 'reselect';
import { getSectionIds } from './sectionSelectors';
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

export const getItem = createSelector(
    [ getListItems ],
    items => itemId => items[itemId]
);

export const getCatalogItem = createSelector(
    [ itemsSelector ],
    items => itemId => items[itemId]
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

// export const getItemIds = createSelector(
//     [ getSectionItemsMap, getSectionIds ],
//     (sectionItemsMap, sectionIds) => sectionIds.map(sectionId => sectionItemsMap[sectionId])
// );

export const getListData = createSelector(
    [ getSectionItemsMap, getSectionIds ],
    (sectionItemsMap, sectionIds) => sectionIds.map(sectionId => ({
        key: sectionId,
        data: sectionItemsMap[sectionId].map(id => ({ key: id }))
    }))
);

export const getFilteredListData = createSelector(
    [ getListData, getItem, textFilterSelector ],
    (sections, getItem, textFilter) => sections.map(section => Object.assign({}, section, {
        data: section.data.filter(({ key }) => getItem(key)
            .name
            .toLowerCase()
            .indexOf(textFilter.toLowerCase()) >= 0)
    }))
);

// export const getFilteredItemIds = createSelector(
//     [ getItemIds, getItem, textFilterSelector ],
//     (sectionActiveItemIds, itemGetter, textFilter) => sectionActiveItemIds.map(
//         singleSectionItemIds =>
//             singleSectionItemIds
//                 .filter(
//                     itemId => itemGetter(itemId)
//                         .name
//                         .toLowerCase()
//                         .indexOf(textFilter.toLowerCase()) >= 0
//                 )
//     )
// );

export const getCatalogItemIds = createSelector(
    [ itemsSelector ], items => Object.keys(items)
);

export const getFilteredCatalogItemIds = createSelector(
    [ itemsSelector, getCatalogItemIds, textFilterSelector ],
    (itemsMap, itemIds, textFilter) => itemIds.filter(id =>
        itemsMap[id].name.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0)
);

export const isItemActive = createSelector(
    [ activeItemsSelector ],
    activeItems => itemId => Boolean(activeItems[itemId])
);

export const getNonActiveFilteredCatalogItemIds = createSelector(
    [ getFilteredCatalogItemIds, isItemActive ],
    (filteredItemsIds, isActive) => filteredItemsIds.filter(id => !isActive(id))
);

export const getCatalogFlatListData = createSelector(
    [ getNonActiveFilteredCatalogItemIds ],
    itemIds => itemIds.map(id => ({ key: id }))
);

export const isItemChecked = createSelector(
    [ activeItemsSelector ],
    activeItems => itemId => activeItems[itemId].isChecked
);
