// external
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import { changeText } from '../../actions/catalogActions';

// selectors
import {
getCatalogFlatListData
} from '../../selectors/itemSelectors';
import {
searchCreateTextSelector
} from '../../selectors/catalogSelector';

// components
import CatalogItem, { ListItem } from './Item';
import SearchCreateItem from './SearchCreateItem';

const CatalogItems = ({ data, searchCreateText, onChangeText, ...other }) => (
    <View { ...other }>
        <SearchCreateItem onChangeText={ onChangeText }
                          value={ searchCreateText }
        />
        {
            searchCreateText === '' ? null : (
                <ListItem name={ '+ Create \'' + searchCreateText + '\'...' }
                          isChecked={ false }
                          onPress={ () => console.log('creating ' + searchCreateText + '...') }

                />
            )
        }
        <FlatList data={ data }
                  renderItem={ ({ item: { key } }) => (<CatalogItem rowId={ key } />) }
        />
    </View>
);

const mapStateToProps = state => ({
    data: getCatalogFlatListData(state),
    searchCreateText: searchCreateTextSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onChangeText: changeText
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItems);
