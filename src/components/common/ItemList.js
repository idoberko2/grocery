import React  from 'react';
import { StyleSheet, View, ListView, Text } from 'react-native';

export default ItemList = ({ dataSource, renderRow, renderSectionHeader, onPressAdd }) => (
    <View style={ styles.mainContainer }>
        <ListView dataSource={ dataSource }
                  renderRow={ renderRow }
                  renderSectionHeader={ renderSectionHeader }
                  enableEmptySections
        />
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 12,
    }
});
