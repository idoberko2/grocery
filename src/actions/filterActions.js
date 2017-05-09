export const consts = {
    CHANGE_FILTER_TEXT: 'CHANGE_FILTER_TEXT'
};

export const changeFilterText = text => ({
    type: consts.CHANGE_FILTER_TEXT,
    text
});
