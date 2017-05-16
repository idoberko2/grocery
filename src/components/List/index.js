import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import PageTitle from "../common/PageTitle";

import ItemList from './SmartItemList';


export default class List extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.titleContainer }>
                    <StatusBar />
                    <PageTitle title="Mush"
                    />
                </View>
                <ItemList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        direction: 'ltr'
    },
    titleContainer: {
        flex: 2,
    }
});
