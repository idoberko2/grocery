import ApiList from '../api/apiList';
import { isItemChecked } from '../selectors/itemSelectors';

export const consts = {
    RECEIVE_LIST: 'RECEIVE_LIST',
    SET_ITEM_IS_CHECKED: 'SET_ITEM_IS_CHECKED',
    ADD_ITEM_TO_LIST: 'ADD_ITEM_TO_LIST'
};

function receiveListData(data) {
    const {
        sections,
        items,
        activeItems
    } = data;

    return {
        type: consts.RECEIVE_LIST,
        sections,
        items,
        activeItems
    }
}

export const getList = () => dispatch =>
    ApiList.getListData()
        .then(data => dispatch(receiveListData(data)))
        .catch(err => console.error(err));

export const toggleItem = itemId => (dispatch, getState) => dispatch({
    type: consts.SET_ITEM_IS_CHECKED,
    itemId,
    value: !isItemChecked(getState())(itemId)
});

export const addItemToList = (itemId, quantity = 1) => ({
    type: consts.ADD_ITEM_TO_LIST,
    itemId,
    quantity
});
