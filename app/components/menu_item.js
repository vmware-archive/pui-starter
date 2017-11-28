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

    const seasonalIcon = <span className="seasonal bg-brand-5 type-neutral-11">seasonal</span>;
    const glutenFreeIcon = <span className="gluten-free bg-accent-1 type-neutral-11">gluten-free</span>;
    const renderSpiciness = spiciness => <span
      className="spiciness">{pepper.repeat(spiciness)}</span>;

    return (
      <Grid className="menu-item box-shadow-2">
        <FlexCol className="pal">
          <Grid className="menu-item-title">
            <FlexCol>{item.name}</FlexCol>
            <FlexCol fixed>{`$${item.price}`}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{item.description}</FlexCol>
          </Grid>
          <Grid>
            <FlexCol>{renderSpiciness(item.spiciness)}</FlexCol>
            {item.seasonal && <FlexCol fixed>{seasonalIcon}</FlexCol>}
            {item.glutenFree && <FlexCol fixed>{glutenFreeIcon}</FlexCol>}
          </Grid>
        </FlexCol>
      </Grid>
    );
  }
}

module.exports = MenuItem;
