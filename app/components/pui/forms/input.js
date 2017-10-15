import React from 'react';
import classnames from 'classnames';

export class Input extends React.Component {
  componentDidMount() {
    require('pivotal-ui/css/forms');
  }

  render() {
    const {size, className, ...props} = this.props;
    return (
      <input {...{
        ...props, className: classnames('input', {
          'input-lg': size === 'lg',
          'input-sm': size === 'sm',
        }, className)
      }}/>
    );
  }
}