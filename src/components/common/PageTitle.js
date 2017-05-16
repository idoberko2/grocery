import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { changeFilterText } from '../../actions/filterActions';

const PageTitle = ({ title, placeholder, changeFilterText }) => (
    <Toolbar searchable={ { onChangeText: changeFilterText, placeholder, autoFocus: true } }
             centerElement={ title }
             translucent={ true }
    />
);

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'red',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        borderStyle: 'solid',
        fontSize: 28
    },
});

PageTitle.propTypes = {
    placeholder: PropTypes.string,
    title: PropTypes.string.isRequired,
    changeFilterText: PropTypes.func
};

PageTitle.defaultProps = {
    placeholder: 'Search...'
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeFilterText
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
