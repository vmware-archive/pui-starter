const React = require('react');
import PropTypes from 'prop-types';
const {useRouter} = require('./use_router');
import {Actions, useStore} from 'p-flux';
import FormExample from './forms';
import Menu from './menu';
import MenuTable from './menu_table';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/whitespace';
import 'pivotal-ui/css/box-shadows';
import 'pivotal-ui/css/colors';

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
    return [
      <Grid key="menu-listing" gutter={false} className="maxxl">
        <FlexCol/>
        <FlexCol className="mrxxl">
          <Menu {...{data}}/>
        </FlexCol>
      </Grid>,
      <Grid>
        <FlexCol/>
        <FlexCol>
          <MenuTable {...{data}}/>
        </FlexCol>
      </Grid>,
      <Grid key="menu-form">
        <FlexCol/>
        <FlexCol className="mrxxl">
          <FormExample/>
        </FlexCol>
      </Grid>
    ];
  }
}

const EnhancedApplication = useStore(useRouter(Application), {
  store: require('../store'),
  actions: [],
  dispatcherHandlers: [
    require('../dispatchers/main_dispatcher'),
    require('../dispatchers/api_dispatcher')
  ],
  /* eslint-disable no-console */
  onDispatch: (event) => {
    console.info('dispatching event', event);
  }
  /* eslint-enable no-console */
});

export default EnhancedApplication;
