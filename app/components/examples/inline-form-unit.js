import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons'
import {Icon} from 'pivotal-ui/react/iconography';
import {Form, Input, Toggle} from '../pui/form';

export const Jsx = () => (
  <div>
    <Form {...{
      rows: [{
        cols: [{
          name: 'checkbox',
          label: 'Checkbox 1',
          field: () => <Input type="checkbox" id="inline-form-unit-checkbox-1"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          name: 'checkbox',
          label: 'Checkbox 2',
          field: () => <Input type="checkbox" id="inline-form-unit-checkbox-2"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          name: 'toggle',
          label: 'Toggle',
          field: () => <Toggle id="inline-form-unit-toggle"/>,
          inline: true,
          labelPosition: 'after'
        }]
      }, {
        cols: [{
          name: 'radio',
          label: 'Radio 1',
          field: () => <Input type="radio" id="inline-form-unit-radio-1"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          name: 'radio',
          label: 'Radio 2',
          field: () => <Input type="radio" id="inline-form-unit-radio-2"/>,
          inline: true,
          labelPosition: 'after'
        }, {
          name: 'radio',
          label: 'Radio 3',
          field: () => <Input type="radio" id="inline-form-unit-radio-3"/>,
          inline: true,
          labelPosition: 'after'
        }]
      }]
    }}/>
    <Form {...{
      rows: [{
        cols: [{
          name: 'username',
          label: 'Username',
          field: () => <Input id="inline-form-unit-username"/>,
          inline: true
        }, {
          name: 'password',
          label: 'Password',
          field: () => <Input type="password" id="inline-form-unit-password"/>,
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

export const code = `<Form {...{
  rows: [{
    cols: [{
       name: 'checkbox',
       label: 'Checkbox 1',
       field: () => <Input type="checkbox"/>,
       inline: true,
       labelPosition: 'after'
    }]
  }]
}}/>
<Form {...{
  rows: [{
    cols: [{
      name: 'username',
      label: 'Username',
      field: () => <Input/>,
      inline: true
    }]
  }]
}}/>`;