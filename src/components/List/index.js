import React  from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';
import { MKColor } from 'react-native-material-kit';
import ActionButton from 'react-native-action-button';
import { NavigationActions } from 'react-navigation';

import PageTitle from './PageTitle';
import ListItems from './ListItems';


export const List = ({ onPressAdd }) => (
    <View style={ styles.container }>
        <View style={ styles.titleContainer }>
            <PageTitle title="Mush"
            />
        </View>
        <ListItems style={ styles.listItems } />
        <ActionButton buttonColor={ MKColor.palette_red_500 }
                      onPress={ onPressAdd }
        />
    </View>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onPressAdd: () => dispatch(NavigationActions.navigate({ routeName: 'ItemCatalog' }))
});

export default SmartList = connect(mapStateToProps, mapDispatchToProps)(List);

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
