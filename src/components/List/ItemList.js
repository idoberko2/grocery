import React  from 'react';
import { StyleSheet, View, ListView, Text } from 'react-native';
import { MKColor } from 'react-native-material-kit';
import ActionButton from 'react-native-action-button';

export default ItemList = ({ dataSource, renderRow, renderSectionHeader, onPressAdd }) => (
    <View style={ styles.mainContainer }>
        <ListView dataSource={ dataSource }
                  renderRow={ renderRow }
                  renderSectionHeader={ renderSectionHeader }
                  enableEmptySections
        />
        <ActionButton buttonColor={ MKColor.palette_red_500 }
                      onPress={ onPressAdd }
        />
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 12,
    }
});
