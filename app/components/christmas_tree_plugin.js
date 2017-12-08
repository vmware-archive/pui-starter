import {TablePlugin} from 'pivotal-ui/react/table';

const greenBg = {style: {backgroundColor: 'lightgreen'}};
const pinkBg = {style: {backgroundColor: 'pink'}};

export function withChristmasTree(Table) {
  return class TableWithChristmasTree extends TablePlugin {
    render() {
      return this.renderTable(Table, {
        td: (props, {rowDatum, column: {attribute}}) => {

        }
      });
    }
  };
}