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
        field: () => <Input id="layout-first-name"/>
      }, {
        name: 'middle-initial',
        className: 'col-fixed middle-initial',
        label: 'M',
        optional: true,
        optionalText: '(Opt)',
        field: () => <Input id="layout-middle-initial"/>
      }, {
        name: 'last-name',
        label: 'Last Name',
        field: () => <Input id="layout-last-name"/>
      }]
    }, {
      cols: [{
        name: 'address',
        label: 'Street Address',
        field: () => <Input id="layout-address"/>
      }]
    }, {
      cols: [{
        name: 'city',
        label: 'City',
        field: () => <Input id="layout-city"/>
      }, {
        name: 'state',
        className: 'col-fixed',
        label: 'State',
        initialValue: 'CA',
        field: () => (
          <select id="layout-state">
            <option>CA</option>
            <option>NY</option>
          </select>
        )
      }, {
        name: 'zip-code',
        className: 'col-fixed',
        label: 'Zip Code',
        field: () => <Input id="layout-zip-code"/>
      }]
    }, {
      cols: [{
        className: 'txt-r mtxl',
        field: ({canReset, reset, canSubmit, saving}) => (
          <div>
            <PrimaryButton {...{alt: true, disabled: !canReset(), onClick: reset}}>
              Reset
            </PrimaryButton>
            <PrimaryButton {...{
              disabled: !canSubmit(), type: 'submit', icon: saving && <Icon src="spinner-sm"/>
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
      name: 'first-name',
      label: 'First Name',
      field: () => <Input/>
    }, {
      name: 'middle-initial',
      className: 'col-fixed middle-initial',
      label: 'M',
      optional: true,
      optionalText: '(Opt)',
      field: () => <Input/>
    }]
  }, {
    cols: [{
      name: 'state',
      className: 'col-fixed',
      label: 'State',
      initialValue: 'CA',
      field: () => (
        <select id="layout-state">
          <option>CA</option>
          <option>NY</option>
        </select>
      )
    }]
  }]
}}/>`;