const React = require('react');
import PropTypes from 'prop-types';
const {useRouter} = require('./use_router');
import {Actions, useStore} from 'p-flux';
import FormExample from './forms';
import Menu from './menu';
import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/whitespace';
import 'pivotal-ui/css/box-shadows';
import 'pivotal-ui/css/colors';

if (typeof document !== 'undefined') {
  require('../stylesheets/application.scss');
}

const data = [
  {name: 'Food One', price: 12.50, glutenFree: false, seasonal: true, spiciness: 2, description: null},
  {
    name: 'Food Two',
    price: 47.99,
    glutenFree: true,
    seasonal: true,
    spiciness: undefined,
    description: 'This is a description of food two.'
  },
  {
    name: 'Food Three',
    price: 100,
    glutenFree: false,
    seasonal: true,
    spiciness: 5,
    description: 'This is a description of food three. This is a description of food three. This is a description of food three. '
  },
  {name: 'Food Four', price: 7.00, glutenFree: false, seasonal: true, spiciness: 3, description: null},
  {name: 'Food Five', price: 88.19, glutenFree: true, seasonal: false, spiciness: 3, description: null},
  {
    name: 'Food Six',
    price: 123.45,
    glutenFree: false,
    seasonal: false,
    spiciness: 4,
    description: 'This is a description of food seven.'
  },
  {name: 'Food Seven', price: 55.55, glutenFree: true, seasonal: true, spiciness: 1, description: null},
  {name: 'Food Eight', price: 415.99, glutenFree: true, seasonal: true, spiciness: 2, description: null},
];

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
        [<Grid>
          <FlexCol>
            <Menu data={data}/>
          </FlexCol>
        </Grid>,
        <Grid>
          <FlexCol/>
          <FlexCol className="mrxxl">
            <FormExample/>
          </FlexCol>
        </Grid>]
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
