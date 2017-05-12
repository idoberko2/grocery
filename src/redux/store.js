import { applyMiddleware, createStore, combineReducers } from 'redux';
import middlewares from './middleware';

import items from '../reducers/itemsReducer';
import activeItems from '../reducers/activeItemsReducer';
import sections from '../reducers/sectionsReducer';
import filters from '../reducers/filterReducer';

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(combineReducers({
    items,
    activeItems,
    sections,
    filters
}));
