import ApiList from '../api/apiList';
import { isItemChecked } from '../selectors/itemSelectors';

export const consts = {
    RECEIVE_LIST: 'RECEIVE_LIST',
    SET_ITEM_IS_CHECKED: 'SET_ITEM_IS_CHECKED'
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

export const toggleItem = (sectionId, itemId) => (dispatch, getState) => {
    dispatch({
        type: consts.SET_ITEM_IS_CHECKED,
        sectionId,
        itemId,
        value: !isItemChecked(getState())(itemId)
    })
};
