import React from 'react';
import propTypes from 'prop-types';
import {AdvancedTable} from 'pivotal-ui/react/table';
import {withChristmasTree} from './christmas_tree_plugin';

export default class MenuTable extends React.Component {
  static propTypes = {
    data: propTypes.array.isRequired
  };

  render() {
    const {data} = this.props;
    const columns = [{
      attribute: 'name',
      displayName: 'Name'
    }, {
      attribute: 'price',
      displayName: 'Price',
      sortable: true
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
      sortable: true
    }];

    const rowDrawer = rowDatum => (
      <div className="table-drawer">
        <div className="table-drawer-content">
          <div className="table-drawer-container phxl">
            {rowDatum.description || 'Nothing to say!' }
          </div>
        </div>
      </div>
    );

    const ChristmasTreeTable = withChristmasTree(AdvancedTable);

    return (<ChristmasTreeTable {...{columns, data, rowDrawer}}/>);
  }
}