const React = require('react');
import PropTypes from 'prop-types';
const {useRouter} = require('./use_router');
import {Actions, useStore} from 'p-flux';
import FormExample from './forms';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import 'pivotal-ui/css/alignment';
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
      <Grid>
        <FlexCol/>
        <FlexCol className="mrxxl">
          <FormExample/>
        </FlexCol>
      </Grid>
    );
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
