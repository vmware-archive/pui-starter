import React from 'react';
import {AdvancedTable} from 'pivotal-ui/react/table';
import {prettifyContent} from '../../helpers/application_helper';
import {withChristmasTree} from './christmas_tree_plugin';

const ChristmasTreeTable = withChristmasTree(AdvancedTable);

export default class MenuTable extends React.Component {
  render() {
    const {data} = this.props;
    const columns = [{
      attribute: 'name',
      displayName: 'Name'
    }, {
      attribute: 'price',
      displayName: 'Price',
      sortable: true,
      sortBy: (value) => parseInt(value)
    }, {
      attribute: 'glutenFree',
      displayName: 'Gluten Free',
      CellRenderer: ({glutenFree}) => glutenFree ? 'true' : 'false'
    }, {
      attribute: 'seasonal',
      displayName: 'Seasonal',
      CellRenderer: ({seasonal}) => seasonal ? 'true' : 'false'
    }, {
      attribute: 'spiciness',
      displayName: 'Spiciness',
      sortable: true,
      sortBy: (value) => parseInt(value)
    }];

    const rowDrawer = (rowIndex, rowDatum) => {
      return prettifyContent(rowDatum.description || 'Nothing to say!');
    };

    return (<ChristmasTreeTable {...{data, columns, rowDrawer}}/>);
  }
}