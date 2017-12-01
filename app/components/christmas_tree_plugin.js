import {TablePlugin} from 'pivotal-ui/react/table';

export function withChristmasTree(Table) {
  return class TableWithChristmasTree extends TablePlugin {
    render() {
      return this.renderTable(Table, {
        td: (props, {rowDatum, column: {attribute}}) => {
          if (['glutenFree', 'seasonal'].indexOf(attribute) === -1) return;

          return rowDatum[attribute] ? {style: {backgroundColor: 'green'}} : {style: {backgroundColor: 'red'}};
        }
      })
    }
  }
}