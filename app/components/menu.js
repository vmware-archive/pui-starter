const React = require('react');
import PropTypes from 'prop-types';
import MenuItem from './menu_item';

class Menu extends React.Component {
  static propTypes = {
    data: PropTypes.array
  };

  render() {
    const {data} = this.props;

    return data.map((item, key) => (<MenuItem item={item} key={key}/>));
  }
}

module.exports = Menu;
