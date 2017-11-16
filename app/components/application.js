const React = require('react');
import PropTypes from 'prop-types';
import {Actions} from 'p-flux';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Icon} from 'pivotal-ui/react/iconography';
import 'pivotal-ui/css/typography';
import 'pivotal-ui/css/whitespace';

if (typeof document !== 'undefined') {
  require('../stylesheets/application.scss');
}

class Application extends React.Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    router: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
  };

  componentDidMount() {
    const pathname = (window && window.location.pathname) || '/todoList';
    Actions.setRoute(pathname);
  }

  render() {
    return (
      <div>
        <Grid className="header man">
          <FlexCol fixed className="logo">
            <Icon src="add"/>
          </FlexCol>
          <FlexCol className="title">
            Pivotal <strong>Web Services</strong>
          </FlexCol>
          <FlexCol fixed>Login</FlexCol>
        </Grid>
        <Grid className="man">
          <FlexCol fixed className="sidebar phn">
            <div className="section">
              Sidebar
            </div>
            <ul>
              <li>hello</li>
              <li>world</li>
            </ul>
          </FlexCol>
          <FlexCol className="main">Main Content</FlexCol>
        </Grid>
      </div>
    );
  }
}

module.exports = Application;
