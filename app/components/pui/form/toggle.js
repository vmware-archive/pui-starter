import React from 'react';
import PropTypes from 'prop-types';
import uniqueid from 'lodash.uniqueid';
import classnames from 'classnames';

const mergeProps = (reactInstanceProps, defaultProps) => {
  let {className, id, style, ...remainingProps} = reactInstanceProps;
  let {
    className: defaultClassName,
    id: defaultId,
    style: defaultStyle = {},
    ...remainingDefaultProps
  } = defaultProps;

  className = classnames(defaultClassName, className);
  style = {...defaultStyle, ...style};
  id = id || defaultId;
  remainingProps = {...remainingDefaultProps, ...remainingProps};

  return {className, id, style, ...remainingProps};
};

export class Toggle extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  };

  static defaultProps = {
    size: 'medium'
  };

  render() {
    const {onChange, children, id, size, onClick, ...others} = this.props;
    const toggleId = id || uniqueid('toggle');

    const inputProps = mergeProps(others, {
      className: 'toggle-switch',
      id: toggleId,
      type: 'checkbox',
      onChange
    });

    return (<div>
      <input {...inputProps}/>
      <label {...{htmlFor: toggleId, className: size, onClick}}>{children}</label>
    </div>);
  }
}
