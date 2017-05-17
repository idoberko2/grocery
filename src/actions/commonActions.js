import { getList } from './listActions';

export const initApp = dispatch => {
    dispatch(getList());
};
