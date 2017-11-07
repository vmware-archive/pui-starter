import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons'
import {Icon} from 'pivotal-ui/react/iconography';
import {Form, Input, Toggle} from '../pui/form';

export default () => (
  <div>
    <Form {...{
      rows: [{
        cols: [{
          id: 'inline-form-unit-checkbox-1',
          name: 'checkbox',
          label: 'Checkbox 1',
          field: () => <Input type="checkbox"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          id: 'inline-form-unit-checkbox-2',
          name: 'checkbox',
          label: 'Checkbox 2',
          field: () => <Input type="checkbox"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          id: 'inline-form-unit-toggle',
          name: 'toggle',
          label: 'Toggle',
          field: () => <Toggle/>,
          inline: true,
          labelPosition: 'after'
        }]
      }, {
        cols: [{
          id: 'inline-form-unit-radio-1',
          name: 'radio',
          label: 'Radio 1',
          field: () => <Input type="radio"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          id: 'inline-form-unit-radio-2',
          name: 'radio',
          label: 'Radio 2',
          field: () => <Input type="radio"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          id: 'inline-form-unit-radio-3',
          name: 'radio',
          label: 'Radio 3',
          field: () => <Input type="radio"/>,
          inline: true,
          labelPosition: 'after'
        }]
      }]
    }}/>
    <Form {...{
      rows: [{
        cols: [{
          id: 'inline-form-unit-username',
          name: 'username',
          label: 'Username',
          field: () => <Input/>,
          inline: true
        }, {
          id: 'inline-form-unit-password',
          name: 'password',
          label: 'Password',
          field: () => <Input type="password"/>,
          inline: true
        }, {
          className: 'col-fixed',
          field: ({canSubmit, saving}) => (
            <PrimaryButton {...{
              disabled: !canSubmit(),
              type: 'submit',
              icon: saving && <Icon src="spinner-sm"/>
            }}>{saving ? 'Logging in' : 'Login'}</PrimaryButton>
          )
        }]
      }],
      onSubmit: () => new Promise((res => setTimeout(res, 2000))),
      afterSubmit: ({setState}) => setState({
        initial: {
          username: '',
          password: ''
        }, current: {
          username: '',
          password: ''
        }
      })
    }}/>
  </div>
);