import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

const PageTitle = ({ title, placeholder, changeFilterText }) => {
    const additionalProps = {};

    if (changeFilterText) {
        additionalProps.searchable = {
            onChangeText: changeFilterText, placeholder, autoFocus: true
        };
    }

    return (
        <Toolbar centerElement={ title }
                 { ...additionalProps }
        />
    );
};

// const styles = StyleSheet.create({
//     container: {
//         // height: 60,
//         backgroundColor: 'red',
//         padding: 10,
//         borderBottomWidth: 2,
//         borderBottomColor: '#000',
//         borderStyle: 'solid',
//         fontSize: 28
//     },
// });

PageTitle.propTypes = {
    placeholder: PropTypes.string,
    title: PropTypes.string.isRequired,
    changeFilterText: PropTypes.func
};

PageTitle.defaultProps = {
    placeholder: 'Search...'
};

export default PageTitle;
