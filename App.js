import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import PageTitle from "./src/components/PageTitle";

import ItemList from './src/components/SmartItemList';

import { Provider } from 'react-redux';

import store from './src/redux/store';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.red500,
    },
    toolbar: {
        container: {
            height: 68,
            position: 'absolute',
            elevation: 0,
            left: 0,
            right: 0,
            paddingTop: 18
        },
    },
};

// const items = {
//     section1:           { name: 'section 1', id: 'section1' },
//     'section1:mush1':   { name: 'mush1', isChecked: false, id: 'mush1' },
//     'section1:mush2':   { name: 'mush2', isChecked: true, id: 'mush2' },
//     section2:           { name: 'section 2', id: 'section2' },
//     'section2:mush3':   { name: 'mush3', isChecked: false, id: 'mush3' },
// };

// const sectionIds = ['section1', 'section2'];
// const mushIds = [['mush1', 'mush2'], ['mush3']];


class App extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.titleContainer }>
                    <StatusBar />
                    <PageTitle
                    />
                </View>
                <ItemList />
            </View>
        );
    }
}

export default class SmartApp extends Component {
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Provider store={ store }>
                    <App />
                </Provider>
            </ThemeProvider>
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
