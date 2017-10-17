const React = require('react');
import PropTypes from 'prop-types';
const {useRouter} = require('./use_router');
const Router = require('./router');
import {Actions, useStore} from 'p-flux';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';

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
    const {config, store, router} = this.props;
    const routeOptions = [
      {
        route: '/todoList',
        name: 'Todo List!'
      },
      {
        route: '/apiPage',
        name: 'Page that hits an api'
      },
      {
        route: '/users/new',
        name: 'Create New User'
      },
      {
        route: '/users/list',
        name: 'All Users'
      }
    ];

    const currentRoute = store.currentRoute === '/'
      ? '/todoList' : (store.currentRoute || '/todoList');

    const buttons = routeOptions.map(({route, name}) => {
      const buttonClass = currentRoute === route ? 'btn btn-default' : 'btn btn-default-alt';
      return (<FlexCol fixed={true}>
        <button
        type="button"
        key={route}
        className={buttonClass}
        onClick={e => {e.preventDefault(); Actions.setRoute(route);}}>{name}</button>
      </FlexCol>);
    });

    return (
      <div className="pui-react-starter">
        <Grid className="btn-group" role="group" aria-label="...">
          {buttons}
        </Grid>
        <br/>

        <Router {...{router, config, ...store}}/>
      </div>
    );
  }
}

const EnhancedApplication = useStore(useRouter(Application),
  {
    store: require('../store'),
    actions: [],
    dispatcherHandlers: [
      require('../dispatchers/main_dispatcher'),
      require('../dispatchers/api_dispatcher')
    ],
    /* eslint-disable no-console */
    onDispatch: (event) => {console.info('dispatching event', event);}
    /* eslint-enable no-console */
  }
);

module.exports = EnhancedApplication;
