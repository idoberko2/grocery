import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

import {
    getCatalogItem
} from '../../selectors/itemSelectors';

import {
    addItemToList
} from '../../actions/listActions';

const ListItem = ({ name, onPress, ...other }) => (
    <TouchableHighlight style={ styles.rowContainer }
                        onPress={ onPress }
                        { ...other }
    >
        <Text style={ styles.itemName }>{ name }</Text>
    </TouchableHighlight>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const mapStateToProps = (state, { rowId }) => {
    const item = getCatalogItem(state)(rowId);

    const {
        name
    } = item;

    return {
        name
    };
};

const mapDispatchToProps = (dispatch, { rowId }) => ({
    onPress: () => dispatch(addItemToList(rowId))
});

export { ListItem };
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'column',
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7'
    },
    itemName: {
        fontSize: 16
    }
});
