import React from 'react';
import classnames from 'classnames';

export class FormUnit extends React.Component {
  componentDidMount() {
    require('pivotal-ui/css/forms');
  }

  render() {
    const {className, size, label, info, optional, input, helpBlock} = this.props;
    return <div className={classnames('form-group', className)}>
      {label && <label {...{
        className: classnames('control-label', {
          'label-lg': size === 'lg',
          'label-sm': size === 'sm'
        })
      }}>
        {label}
        {info && '(i)'}
        {optional && '(optional)'}
      </label>}
      {input}
      {helpBlock && <div className="help-block">{helpBlock}</div>}
    </div>;
  }
}