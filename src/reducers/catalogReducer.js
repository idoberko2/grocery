import { consts } from '../actions/catalogActions';

const initialState = {
    text: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case consts.CHANGE_FILTER_TEXT: {
            const {
                text
            } = action;

            return Object.assign({}, state, {
                text
            });
        }
        default: {
            return state;
        }
    }
};
