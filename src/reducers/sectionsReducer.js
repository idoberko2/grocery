import { consts } from '../actions/listActions';

export default (state = {}, action) => {
    switch (action.type) {
        case consts.RECEIVE_LIST: {
            return action.sections;
        }
        default: {
            return state;
        }
    }
};
