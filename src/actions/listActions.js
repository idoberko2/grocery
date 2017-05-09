import ApiList from '../api/apiList';
import { isItemChecked } from '../selectors/itemSelectors';

export const consts = {
    RECEIVE_LIST: 'RECEIVE_LIST',
    SET_ITEM_IS_CHECKED: 'SET_ITEM_IS_CHECKED'
};

function receiveList(list) {
    const sectionsMap = list.reduce((prev, cur) => {
        const {
            id,
            name,
            items
        } = cur;
        const itemIds = items.map(item => item.id);

        prev[id] = {
            id,
            name,
            itemIds
        };

        return prev;
    }, {});

    const itemsMap = list.reduce((prev, cur) => {
        const {
            id,
            items
        } = cur;

        prev[id] = items.reduce((prev, cur) => {
            const {
                id,
                name,
                isChecked,
                sortOrder
            } = cur;

            prev[id] = {
                id,
                name,
                isChecked,
                sortOrder
            };

            return prev;
        }, {});

        return prev;
    }, {});

    return {
        type: consts.RECEIVE_LIST,
        sectionsMap,
        itemsMap
    };
}

export const getList = () => dispatch =>
    ApiList.getList()
        .then(list => {
            console.log({list});
            console.log(typeof list);
            console.log(Array.isArray(list));
            return dispatch(receiveList(list));
        })
        .catch(err => console.error(err));

export const toggleItem = (sectionId, itemId) => (dispatch, getState) => {
    dispatch({
        type: consts.SET_ITEM_IS_CHECKED,
        sectionId,
        itemId,
        value: !isItemChecked(getState())(sectionId, itemId)
    })
};
