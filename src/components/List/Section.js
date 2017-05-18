import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { getSection } from '../../selectors/sectionSelectors';

const Section = ({ name }) => (
    <Text>{ name }</Text>
);

Section.propTypes = {
    name: PropTypes.string.isRequired
};

const mapStateToProps = (state, { sectionId }) => {
    const section = getSection(state)(sectionId);

    const {
        name
    } = section;

    return {
        name
    };
};

const mapDispatchToProps = dispatch => ({});

export { Section };
export default connect(mapStateToProps, mapDispatchToProps)(Section);
