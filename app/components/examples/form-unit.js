import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons'
import {Form, Input} from '../pui/form';

export const Jsx = () => (
  <Form {...{
    rows: [{
      cols: [{
        name: 'first-name',
        label: 'First Name',
        tooltip: 'UUDDLRLR B A Start',
        tooltipSize: 'sm',
        optional: true,
        field: () => <Input id="form-unit-first-name"/>,
        help: 'Help text'
      }, {}]
    }]
  }}/>
);

export const code = `<Form {...{
  rows: [{
    cols: [{
      name: 'first-name',
      label: 'First Name',
      tooltip: 'UUDDLRLR B A Start',
      optional: true,
      field: () => <Input/>,
      help: 'Help text'
    }]
  }]
}}/>`;