import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { toggleItem } from '../../actions/listActions';
import { getCatalogItem } from '../../selectors/itemSelectors';

const ListItem = ({ name, isActive, onClick, ...other }) => (
    <View>
        <Text>{ name }</Text>
    </View>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, { rowId }) => {
    const item = getCatalogItem(state)(rowId);

    const {
        name
    } = item;

    return {
        name,
        isActive: true
    };
};

const mapDispatchToProps = (dispatch, { rowId }) => bindActionCreators({
    onClick: () => {}
}, dispatch);

export { ListItem };
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
