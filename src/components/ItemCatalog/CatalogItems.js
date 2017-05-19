import React from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CatalogItem from './Item';

import {
    getCatalogFlatListData
} from '../../selectors/itemSelectors';

const CatalogItems = ({ data, ...other }) => (
    <FlatList data={ data }
              renderItem={ ({ item: { key } }) => (<CatalogItem rowId={ key } />) }
              { ...other }
    />
);

const mapStateToProps = state => ({
    data: getCatalogFlatListData(state)
});

export default connect(mapStateToProps)(CatalogItems);
