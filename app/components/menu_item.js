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

    return (
      <Grid className="menu-item box-shadow-1">
        <FlexCol>
          <Grid className="menu-item-title">
            <FlexCol>{name}</FlexCol>
            <FlexCol fixed>${(+price).toFixed(2)}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{description}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{renderPeppers(spiciness)}</FlexCol>
            <FlexCol fixed className="h6">{details}</FlexCol>
          </Grid>
        </FlexCol>
      </Grid>
    );
  }
}
