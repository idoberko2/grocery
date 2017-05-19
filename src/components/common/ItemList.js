import React  from 'react';
import { StyleSheet, View, ListView, Text } from 'react-native';

export default ItemList = ({ dataSource, renderRow, renderSectionHeader, ...other }) => (
    <View { ...other }>
        <ListView dataSource={ dataSource }
                  renderRow={ renderRow }
                  renderSectionHeader={ renderSectionHeader }
                  enableEmptySections
        />
    </View>
);
