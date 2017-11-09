import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import deepEqual from 'deep-equal';
import {FormUnit} from './form-unit';

const deepClone = o => JSON.parse(JSON.stringify(o));

export class Form extends React.Component {
  static propTypes = {
    rows: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSubmitError: PropTypes.func.isRequired,
    afterSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    rows: [],
    onSubmit: () => {
    },
    onSubmitError: () => ({}),
    afterSubmit: () => {
    }
  };

  constructor(props) {
    super(props);
    const {rows} = props;
    const requiredFields = [];
    const initial = {};
    rows.forEach(({cols}) => {
      cols
        .filter(({name}) => name)
        .forEach(({optional, name, initialValue}) => {
          optional || requiredFields.push(name);
          initial[name] = initialValue || '';
        });
    });

    const current = deepClone(initial);
    this.state = {
      initial,
      current,
      saving: false,
      errors: {},
      requiredFields
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.reset = this.reset.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.canReset = this.canReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  onClick(name) {
    return () => {
      this.setState({
        current: {
          ...this.state.current,
          [name]: !this.state.current[name]
        }
      });
    };
  }

  onChange(name, validator) {
    return (...args) => {
      const value = args.length > 1 ? args[1] : args[0] && args[0].target.value;
      const nextState = {
        current: {
          ...this.state.current,
          [name]: value
        }
      };
      const error = validator && validator(value);
      if (!error) {
        nextState.errors = {
          ...this.state.errors,
          [name]: undefined
        };
      }
      this.setState(nextState);
    };
  }

  onBlur({name, validator}) {
    return ({target: {value}}) => {
      const error = validator(value);
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: error
        }
      });
    };
  }

  canSubmit({checkRequiredFields} = {}) {
    const {rows} = this.props;
    const {initial, current, saving, requiredFields} = this.state;
    return !saving
      && Object.keys(initial).find(key => !deepEqual(initial[key], current[key]))
      && (checkRequiredFields
        ? checkRequiredFields(this.state.current)
        : !requiredFields.find(key => !current[key]))
      && !rows.find(({cols}) => cols.find(({name, validator}) => validator && validator(this.state.current[name])));
  }

  canReset() {
    const {saving, initial, current} = this.state;
    return !saving && !deepEqual(initial, current);
  }

  async onSubmit(e) {
    e && e.preventDefault();
    const {onSubmit, onSubmitError, afterSubmit} = this.props;
    const {initial, current} = this.state;
    this.setState({saving: true});
    const nextState = {saving: false};
    try {
      const response = await onSubmit({initial, current});
      this.setState({...nextState, current, initial: deepClone(current), errors: {}});
      afterSubmit({state: this.state, setState: this.setState, response, reset: this.reset});
    } catch (err) {
      this.setState({...nextState, errors: (onSubmitError && onSubmitError(err)) || {}});
      throw err;
    }
  }

  reset() {
    const {initial} = this.state;
    this.setState({current: deepClone(initial), errors: {}});
  }

  render() {
    const {className, rows} = this.props;
    const {saving} = this.state;

    return (
      <form {...{className: classnames('form', className), onSubmit: this.onSubmit}}>
        <fieldset {...{disabled: saving}}>
          {rows.map(({cols = [], wrapper}, key) => {
            const hasLabel = cols.filter(({label}) => label).length > 0;
            const hasInline = cols.find(({inline}) => inline);

            const row = (
              <div {...{className: 'grid', key}}>
                {cols.map(({className, field, name, help, validator, ...rest}, key) => (
                  <div {...{className: classnames('col', className), key: `col${key}`}}>
                    <FormUnit {...{
                      className: classnames({'has-label': hasLabel && !hasInline}),
                      hasError: !!this.state.errors[name],
                      ...rest,
                      field: (() => {
                        const element = field && field({
                          canSubmit: this.canSubmit,
                          canReset: this.canReset,
                          reset: this.reset,
                          onSubmit: this.onSubmit,
                          saving: this.state.saving,
                          setState: this.setState,
                          state: this.state,
                          onChange: this.onChange(name, validator)
                        });
                        if (!element) return null;
                        const isCheckbox = element.props.type === 'checkbox';
                        const props = {
                          name: element.props.name || name
                        };
                        if (isCheckbox) {
                          props.defaultChecked = this.state.current[name];
                          props.onClick = this.onClick(name);
                        } else {
                          props.value = element.props.value || this.state.current[name];
                          props.onChange = element.props.onChange || this.onChange(name, validator);
                          validator && (props.onBlur = this.onBlur({name, validator}));
                        }
                        return React.cloneElement(element, props);
                      })(),
                      help: this.state.errors[name] || help
                    }}/>
                  </div>
                ))}
              </div>
            );

            return wrapper ? React.cloneElement(wrapper(this.state), {children: row, key}) : row;
          })}
        </fieldset>
      </form>
    );
  }
}