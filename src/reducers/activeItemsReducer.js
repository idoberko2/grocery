import { consts } from '../actions/listActions';

export default (state = {}, action) => {
    switch (action.type) {
        case consts.RECEIVE_LIST: {
            return action.activeItems;
        }
        case consts.SET_ITEM_IS_CHECKED: {
            const {
                itemId,
                value
            } = action;

            return Object.assign({}, state, {
                [ itemId ]: Object.assign({}, state[itemId], {
                    isChecked: value
                })
            });
        }
        default: {
            return state;
        }
    }
};
