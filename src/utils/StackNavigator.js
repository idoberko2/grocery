import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import List from '../components/List';
import ItemCatalog from '../components/ItemCatalog';

export const MyStackNavigator = StackNavigator({
    List: { screen: List },
    ItemCatalog: { screen: ItemCatalog }
}, {
    headerMode: 'none',
    initialRouteName: 'List'
});

const NavigatorWithNavigation = ({ state, dispatch }) => {
    return (
        <MyStackNavigator navigation={ addNavigationHelpers({ state, dispatch }) }
        />
    );
};

const mapStateToProps = ({ navState }) => ({
    state: navState
});

export default SmartNavigator = connect(mapStateToProps)(NavigatorWithNavigation);
