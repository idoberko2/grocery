import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import StackNavigator from './src/utils/StackNavigator';
import store from './src/redux/store';
import { initApp } from './src/actions/commonActions';

const uiTheme = {
    fontFamily: 'Arial',
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

export default class SmartApp extends Component {
    componentWillMount() {
        store.dispatch(initApp);
    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Provider store={ store }>
                    <StackNavigator />
                </Provider>
            </ThemeProvider>
        );
    }
}
