import React from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CatalogItem from './Item';

import {
    getCatalogFlatListData
} from '../../selectors/itemSelectors';

const CatalogItems = ({ data }) => (
    <FlatList data={ data }
              renderItem={ ({ item: { key } }) => (<CatalogItem rowId={ key } />) }
    />
);

const mapStateToProps = state => ({
    data: getCatalogFlatListData(state)
});

export default connect(mapStateToProps)(CatalogItems);
