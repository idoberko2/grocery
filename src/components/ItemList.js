import React, { Component } from 'react';
import { StyleSheet, View, ListView, Text } from 'react-native';
import { setTheme, MKButton, MKColor } from 'react-native-material-kit';

setTheme({
    primaryColor: MKColor.palette_red_500
});

const fabStyle = {
    width: 56,
    height: 56,
    bottom: 12,
    left: 12,
    borderWidth: 0,
    borderRadius: 28
};

const ColoredFab = MKButton.coloredFab()
    .withStyle(fabStyle)
    .build();

export default ItemList = ({ dataSource, renderRow, renderSectionHeader }) => (
    <View style={ styles.mainContainer }>
        <ListView dataSource={ dataSource }
                  renderRow={ renderRow }
                  renderSectionHeader={ renderSectionHeader }
                  enableEmptySections
        />
        <ColoredFab fab={true}>
            <Text style={ styles.fabTextStyle }>+</Text>
        </ColoredFab>
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 12,
    },
    fabTextStyle: {
        color: '#fff',
        fontSize: 24,
        paddingBottom: 3
    }
});
