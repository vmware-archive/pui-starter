import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import deepEqual from 'deep-equal';
import {FormUnit} from './form-unit';

const deepClone = o => JSON.parse(JSON.stringify(o));

export class Form extends React.Component {
  static propTypes = {
    rows: PropTypes.array,
    onSubmit: PropTypes.func,
    onSubmitError: PropTypes.func,
    afterSubmit: PropTypes.func
  };

  static defaultProps = {
    initialState: {},
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
    const requiredParameters = [];
    const initial = {};
    rows.forEach(({cols}) => {
      cols
        .filter(({name}) => name)
        .forEach(({optional, name, initialValue}) => {
          optional || requiredParameters.push(name);
          initial[name] = initialValue || '';
        });
    });

    const current = deepClone(initial);
    this.state = {
      initial,
      current,
      saving: false,
      errors: {},
      requiredParameters
    };

    this.onChange = this.onChange.bind(this);
    this.reset = this.reset.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
    this.canReset = this.canReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }

  onChange(name) {
    return (...args) => {
      this.setState({
        current: {
          ...this.state.current,
          [name]: args.length > 1 ? args[1] : args[0] && args[0].target.value
        }
      });
    };
  }

  canSubmit() {
    const {initial, current, saving, requiredParameters} = this.state;
    return !saving
      && Object.keys(initial).find(key => !deepEqual(initial[key], current[key]))
      && !requiredParameters.find(key => !current[key]);
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
      this.setState({
        ...nextState,
        current,
        initial: deepClone(current),
        errors: {}
      });
      afterSubmit({
        state: this.state,
        setState: this.setState,
        response,
        reset: this.reset
      });
    } catch (err) {
      this.setState({
        ...nextState,
        errors: (onSubmitError && onSubmitError(err)) || {}
      });
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
      <form {...{
        className: classnames('form', className),
        onSubmit: this.onSubmit
      }}>
        <fieldset {...{disabled: saving}}>
          {rows.map(({cols = [], wrapper}, key) => {
            const hasLabel = cols.find(({label}) => label);
            const hasInline = cols.find(({inline}) => inline);

            const row = (
              <div {...{className: 'grid', key}}>
                {cols.map(({className, field, name, help, id, ...rest}, key) => (
                  <div {...{
                    className: classnames('col', className),
                    key: `col${key}`
                  }}>
                    <FormUnit {...{
                      className: classnames({'has-label': hasLabel && !hasInline}),
                      id,
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
                          onChange: this.onChange(name)
                        });
                        if (!element) return null;
                        return React.cloneElement(element, {
                          id,
                          name: element.props.name || name,
                          value: element.props.value || this.state.current[name],
                          onChange: element.props.onChange || this.onChange(name)
                        });
                      })(),
                      help: this.state.errors[name] || help
                    }}/>
                  </div>
                ))}
              </div>
            );

            return wrapper ? React.cloneElement(wrapper(this.state), {
              children: row,
              key
            }) : row;
          })}
        </fieldset>
      </form>
    );
  }
}