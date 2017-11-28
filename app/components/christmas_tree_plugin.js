import {TablePlugin} from 'pivotal-ui/react/table';

export function withChristmasTree(Table) {
  return class TableWithChirstmasTree extends TablePlugin {
    render() {
      return this.renderTable(Table, {
        td: (props, {rowDatum, column: {attribute}}) => {
          if (rowDatum[attribute] === true) return ({style: {backgroundColor: 'green'}});
          else if (rowDatum[attribute] === false) return ({style: {backgroundColor: 'red'}});
        }
      })
    }
  }
}