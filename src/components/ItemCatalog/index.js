import React from 'react';
import { connect } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import PageTitle from '../common/PageTitle';
import CatalogItems from './CatalogItems';

export const ItemCatalog = ({ onPressBack }) => (
    <View style={ styles.container }>
        <View style={ styles.titleContainer }>
            <PageTitle title="Mush Catalog" />
        </View>
        <CatalogItems style={ styles.listItems } />
        <View>
            <Button onPress={ onPressBack }
                    title="Back to list"
            />
        </View>
    </View>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onPressBack: () => dispatch(NavigationActions.navigate({ routeName: 'List' }))
});

export default SmartItemCatalog = connect(mapStateToProps, mapDispatchToProps)(ItemCatalog);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        direction: 'ltr'
    },
    titleContainer: {
        height: 60
    },
    listItems: {
        flex: 1
    }
});
