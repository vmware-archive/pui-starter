import React from 'react';
import FormPage from './form_page';

if (typeof document !== 'undefined') {
  require('../stylesheets/application.scss');
}

export default class Application extends React.Component {
  render() {
    return (
      <div className="pui-react-starter">
        <FormPage/>
      </div>
    );
  }
}