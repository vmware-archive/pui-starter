import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons'
import {Icon} from 'pivotal-ui/react/iconography';
import {Form, Input} from '../pui/form';

export const Jsx = () => (
  <Form {...{
    rows: [{
      cols: [{
        name: 'number',
        label: 'Pick a number',
        field: () => <Input type="number" id="form-validation-number"/>,
        help: 'from 1 to 100',
        validator: value => {
          const parsed = parseInt(value, 10);
          console.log({value, parsed})
          if (isNaN(parsed)) return 'Not a number';
          if (parsed > 100) return 'Must be <= 100';
          if (parsed < 1) return 'Must be >= 1';
        }
      }, {
        field: ({canReset, reset, canSubmit, saving}) => (
          <div>
            <PrimaryButton {...{
              alt: true,
              disabled: !canReset(),
              onClick: reset
            }}>Reset</PrimaryButton>
            <PrimaryButton {...{
              disabled: !canSubmit(),
              type: 'submit',
              icon: saving && <Icon src="spinner-sm"/>
            }}>Submit</PrimaryButton>
          </div>
        )
      }]
    }],
    onSubmit: () => new Promise((res => setTimeout(res, 2000))),
    afterSubmit: ({setState}) => setState({
      initial: {number: ''}, current: {number: ''}
    })
  }}/>
);

export const code = `<Form {...{
  rows: [{
    cols: [{
      name: 'number',
      label: 'Pick a number',
      field: () => <Input type="number"/>,
      help: 'from 1 to 100',
      validator: value => {
        const parsed = parseInt(value, 10);
        if (isNaN(parsed)) return 'Not a number';
        if (parsed > 100) return 'Must be <= 100';
        if (parsed < 1) return 'Must be >= 1';
      }
    }]
  }]
}}/>`;