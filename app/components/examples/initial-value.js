import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons'
import {Form, Input} from '../pui/form';

export const Jsx = () => (
  <Form {...{
    rows: [{
      cols: [{
        name: 'first-name',
        label: 'First Name',
        initialValue: 'Jonathan',
        field: () => <Input id="initial-value-first-name"/>
      }, {
        name: 'middle-initial',
        className: 'col-fixed middle-initial',
        label: 'M',
        optional: true,
        optionalText: '(Opt)',
        field: () => <Input id="initial-value-middle-initial"/>
      }, {
        name: 'last-name',
        label: 'Last Name',
        initialValue: 'Berney',
        field: () => <Input id="initial-value-last-name"/>
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

export const code = `<Form {...{
  rows: [{
    cols: [{
      name: 'first-name',
      label: 'First Name',
      initialValue: 'Jonathan',
      field: () => <Input/>
    }]
  }]
}}/>`;