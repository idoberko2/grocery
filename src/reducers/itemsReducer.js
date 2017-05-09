import { consts } from '../actions/listActions';

export default (state = {}, action) => {
    switch (action.type) {
        case consts.RECEIVE_LIST: {
            return action.itemsMap;
        }
        case consts.SET_ITEM_IS_CHECKED: {
            const {
                sectionId,
                itemId,
                value
            } = action;

            return Object.assign({}, state, {
                [ sectionId ]: Object.assign({}, state[sectionId], {
                    [ itemId ]: Object.assign({}, state[sectionId][itemId], {
                        isChecked: value
                    })
                })
            });
        }
        default: {
            return state;
        }
    }
};
