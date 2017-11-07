import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons'
import {Form, Input} from '../pui/form';

export default () => (
  <Form {...{
    rows: [{
      cols: [{
        id: 'form-unit-first-name',
        name: 'first-name',
        label: 'First Name',
        tooltip: 'UUDDLRLR B A Start',
        tooltipSize: 'sm',
        optional: true,
        field: () => <Input/>,
        help: 'Help text'
      }, {}]
    }]
  }}/>
);