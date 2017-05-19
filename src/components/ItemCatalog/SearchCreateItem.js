import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchCreateItem = ({ onChangeText, value, style, ...other }) => {
    const elemStyle = [ styles.container ];

    if (style) {
        elemStyle.push(style);
    }

    return (
        <View style={ elemStyle }>
            <TextInput onChangeText={ onChangeText }
                       value={ value }
                       style={ styles.textInput }
                       clearButtonMode="always"
                       placeholder="Search / Create items"
                       { ...other }
            />
        </View>
    );
};

SearchCreateItem.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default SearchCreateItem;

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 5,
        backgroundColor: '#fff',
    },
    textInput: {
        color: '#333',
        fontSize: 16,
        height: 40
    }
});
