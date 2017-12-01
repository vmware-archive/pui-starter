const React = require('react');
import PropTypes from 'prop-types';
const {useRouter} = require('./use_router');
import {Actions, useStore} from 'p-flux';
import FormExample from './forms';
import Menu from './menu';
import MenuTable from './menu_table';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/box-shadows';
import 'pivotal-ui/css/colors';
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
    const data = Actions.fetchMenu();
    return (
      <div>
        <h2 className="h2">Menu</h2>
        <div className="mhl mbxxl">
          <Menu {...{data}}/>
        </div>
        <hr/>
        <h2 className="h2">Menu Admin Table</h2>
        <MenuTable {...{data}}/>
        <hr/>
        <h2 className="h2">Add Menu Item</h2>
        <FormExample/>
      </div>
    );
  }
}

const EnhancedApplication = useStore(useRouter(Application), {
  store: require('../store'),
  actions: [],
  dispatcherHandlers: [
    require('../dispatchers/main_dispatcher'),
    require('../dispatchers/api_dispatcher')
  ]
});

export default EnhancedApplication;
