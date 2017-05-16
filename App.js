import React, { Component } from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import { Provider } from 'react-redux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import StackNavigator from './src/utils/StackNavigator';

import store from './src/redux/store';

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

// const items = {
//     section1:           { name: 'section 1', id: 'section1' },
//     'section1:mush1':   { name: 'mush1', isChecked: false, id: 'mush1' },
//     'section1:mush2':   { name: 'mush2', isChecked: true, id: 'mush2' },
//     section2:           { name: 'section 2', id: 'section2' },
//     'section2:mush3':   { name: 'mush3', isChecked: false, id: 'mush3' },
// };

// const sectionIds = ['section1', 'section2'];
// const mushIds = [['mush1', 'mush2'], ['mush3']];

export default class SmartApp extends Component {
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
