const React = require('react');
import PropTypes from 'prop-types';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {pepper} from '../../helpers/application_helper';

class MenuItem extends React.Component {
  static propTypes = {
    item: PropTypes.object
  };

  render() {
    const {item} = this.props;
    const {name, description, price, spiciness, seasonal, glutenFree} = item;
    const displayPrice = `$${(+price).toFixed(2)}`;

    const seasonalIcon = seasonal &&
      <span className="seasonal bg-brand-5 type-neutral-11">seasonal</span>;
    const glutenFreeIcon = glutenFree &&
      <span className="gluten-free bg-accent-1 type-neutral-11">gluten-free</span>;
    const spicinessInfo = <span className="spiciness">{pepper.repeat(spiciness)}</span>;

    return (
      <Grid className="menu-item box-shadow-2">
        <FlexCol className="pal">
          <Grid className="menu-item-title">
            <FlexCol>{name}</FlexCol>
            <FlexCol fixed>{displayPrice}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{description}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{spicinessInfo}</FlexCol>
            {seasonal && <FlexCol fixed>{seasonalIcon}</FlexCol>}
            {glutenFree && <FlexCol fixed>{glutenFreeIcon}</FlexCol>}
          </Grid>
        </FlexCol>
      </Grid>
    );
  }
}

module.exports = MenuItem;
