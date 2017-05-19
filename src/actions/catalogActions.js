export const consts = {
    CHANGE_FILTER_TEXT: 'CATALOG/CHANGE_TEXT'
};

export const changeText = text => ({
    type: consts.CHANGE_FILTER_TEXT,
    text
});
