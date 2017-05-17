import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemList from '../common/ItemList';
import Item from './Item';
import {
    getSectionIds,
    getSectionFromBlob as getSectionHeaderData
} from '../../selectors/sectionSelectors';
import {
    getBlob,
    getFilteredItemIds,
    getItemFromBlob as getRowData
} from '../../selectors/itemSelectors';
import { getList } from '../../actions/listActions';

const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1.id !== r2.id,
    sectionHeaderHasChanged: (s1, s2) => s1.id !== s2.id,
    getSectionHeaderData,
    getRowData
});

export class SmartItemList extends Component {
    componentDidMount() {
        const {
            getList
        } = this.props;

        getList();
    }

    static renderRow(rowData, sectionId, rowId) {
        return (
            <Item rowId={ rowId } />
        );
    }

    static renderSectionHeader(sectionData) {
        return (
            <Text>{ sectionData.name }</Text>
        );
    }

    render () {
        const {
            dataSource,
            goToItemCatalog
        } = this.props;

        return (
            <ItemList dataSource={ dataSource }
                      renderRow={ SmartItemList.renderRow }
                      renderSectionHeader={ SmartItemList.renderSectionHeader }
                      onPressAdd={ goToItemCatalog }
            />
        );
    }
}

const mapStateToProps = state => ({
    dataSource: dataSource.cloneWithRowsAndSections(
        getBlob(state), getSectionIds(state), getFilteredItemIds(state)
    )
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SmartItemList);
