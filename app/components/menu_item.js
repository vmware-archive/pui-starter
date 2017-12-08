import React from 'react';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {renderPeppers} from '../../helpers/application_helper';

export default class MenuItem extends React.Component {
  render() {
    const {item} = this.props;
    const {name, price, description, spiciness, glutenFree, seasonal} = item;

    const details = [
      glutenFree && 'gluten-free',
      seasonal && 'seasonal'
    ].filter(i => i).join(', ');

    return null;
  }
}
