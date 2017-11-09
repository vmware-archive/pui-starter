import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Icon} from 'pivotal-ui/react/iconography';
import {Form, Input} from '../pui/form';

export const Jsx = () => (
  <Form {...{
    rows: [{
      cols: [{
        name: 'first-name',
        label: 'First Name',
        initialValue: 'Jonathan',
        field: () => <Input id="disable-while-submitting-first-name"/>
      }, {
        name: 'middle-initial',
        className: 'col-fixed middle-initial',
        label: 'M',
        optional: true,
        optionalText: '(Opt)',
        field: () => <Input id="disable-while-submitting-middle-initial"/>
      }, {
        name: 'last-name',
        label: 'Last Name',
        initialValue: 'Berney',
        field: () => <Input id="disable-while-submitting-last-name"/>
      }]
    }, {
      cols: [{
        name: 'address',
        label: 'Street Address',
        initialValue: '875 Howard St.',
        field: () => <Input id="disable-while-submitting-address"/>
      }]
    }, {
      cols: [{
        name: 'city',
        label: 'City',
        initialValue: 'San Francisco',
        field: () => <Input id="disable-while-submitting-city"/>
      }, {
        name: 'state',
        className: 'col-fixed',
        label: 'State',
        initialValue: 'CA',
        field: () => (
          <select id="disable-while-submitting-state">
            <option>CA</option>
            <option>NY</option>
          </select>
        )
      }, {
        name: 'zip-code',
        className: 'col-fixed',
        label: 'Zip Code',
        initialValue: '94000',
        field: () => <Input id="disable-while-submitting-zip-code"/>
      }]
    }, {
      cols: [{
        className: 'txt-r mtxl',
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
            }}>{saving ? 'Submitting' : 'Submit'}</PrimaryButton>
          </div>
        )
      }]
    }],
    onSubmit: () => new Promise((res => setTimeout(res, 2000)))
  }}/>
);

export const code = `<Form {...{
  rows: [{
    cols: [{
      field: ({saving}) => (
        <CompositeComponent {...{
          disabled: saving
        }}/>
      )
    }]
  }]
}}/>`;