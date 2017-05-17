import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import {
    getCatalogItem
} from '../../selectors/itemSelectors';

const ListItem = ({ name, onClick, ...other }) => (
    <View style={ styles.rowContainer }>
        <Text style={ styles.itemName }>{ name }</Text>
    </View>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
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

const mapDispatchToProps = (dispatch, { rowId }) => bindActionCreators({
    onClick: () => {}
}, dispatch);

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
