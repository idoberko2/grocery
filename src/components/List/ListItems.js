import React, { Component } from 'react';
import { SectionList } from 'react-native';
import { connect } from 'react-redux';

import Item from './Item';

import {
    getFilteredListData
} from '../../selectors/itemSelectors';

import Section from './Section';

export const SmartItemList = ({ data, ...other }) => (
    <SectionList sections={ data }
                 renderItem={ ({ item: { key } }) => (<Item rowId={ key } />) }
                 renderSectionHeader={ ({ section: { key } }) => (<Section sectionId={ key } />) }
                 { ...other }
    />
);

const mapStateToProps = state => ({
    data: getFilteredListData(state)
});

export default connect(mapStateToProps)(SmartItemList);
