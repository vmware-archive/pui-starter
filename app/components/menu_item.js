import React from 'react';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {pepper} from '../../helpers/application_helper';

export default class MenuItem extends React.Component {
  render() {
    const {item} = this.props;
    const {name, description, price, spiciness, seasonal, glutenFree} = item;
    const displayPrice = `$${(+price).toFixed(2)}`;

    const details = [
      seasonal && 'seasonal',
      glutenFree && 'gluten-free'
    ].filter(i => i).join(', ');

    const spicinessInfo = <span className="spiciness">{pepper.repeat(spiciness)}</span>;

    return (
      <Grid className="menu-item box-shadow-1">
        <FlexCol>
          <Grid className="menu-item-title">
            <FlexCol>{name}</FlexCol>
            <FlexCol fixed>{displayPrice}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{description}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{spicinessInfo}</FlexCol>
            <FlexCol fixed>{details}</FlexCol>
          </Grid>
        </FlexCol>
      </Grid>
    );
  }
}
