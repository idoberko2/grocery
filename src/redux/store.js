import { applyMiddleware, createStore, combineReducers } from 'redux';
import middlewares from './middleware';

import items from '../reducers/itemsReducer';
import sections from '../reducers/sectionsReducer';
import filters from '../reducers/filterReducer';

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(combineReducers({
    items,
    sections,
    filters
}));
