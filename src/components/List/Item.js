import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-checkbox';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleItem } from '../../actions/listActions';
import { getItem } from '../../selectors/itemSelectors';

const ListItem = ({ name, isChecked, onClick, ...other }) => (
    <CheckBox label={ name }
              checked={ isChecked }
              onChange={ onClick }
              { ...other }
    />
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, { rowId }) => {
    const item = getItem(state)(rowId);

    const {
        name,
        isChecked
    } = item;

    return {
        name,
        isChecked
    };
};

const mapDispatchToProps = (dispatch, { rowId }) => bindActionCreators({
    onClick: toggleItem.bind(null, rowId)
}, dispatch);

export { ListItem };
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
