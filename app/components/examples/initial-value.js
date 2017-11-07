import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons'
import {Form, Input} from '../pui/form';

export default () => (
  <Form {...{
    rows: [{
      cols: [{
        id: 'initial-value-first-name',
        name: 'first-name',
        label: 'First Name',
        initialValue: 'Jonathan',
        field: () => <Input/>
      }, {
        id: 'initial-value-middle-initial',
        name: 'middle-initial',
        className: 'col-fixed',
        label: 'M',
        optional: true,
        optionalText: '(Opt)',
        field: () => <Input style={{width: '48px'}}/>
      }, {
        id: 'initial-value-last-name',
        name: 'last-name',
        label: 'Last Name',
        initialValue: 'Berney',
        field: () => <Input/>
      }, {
        className: 'col-fixed',
        field: ({canReset, reset}) => (
          <PrimaryButton {...{
            alt: true,
            disabled: !canReset(),
            onClick: reset
          }}>Reset</PrimaryButton>
        )
      }]
    }]
  }}/>
);