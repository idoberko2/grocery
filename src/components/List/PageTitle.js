import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeFilterText } from '../../actions/filterActions';

import PageTitle from '../common/PageTitle';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeFilterText
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
