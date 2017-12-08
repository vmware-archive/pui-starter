import React from 'react';
import {AdvancedTable} from 'pivotal-ui/react/table';
import {prettifyContent} from '../../helpers/application_helper';
import {withChristmasTree} from './christmas_tree_plugin';

const ChristmasTreeTable = withChristmasTree(AdvancedTable);

export default class MenuTable extends React.Component {
  render() {
    return null;
  }
}