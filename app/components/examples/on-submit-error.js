import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Icon} from 'pivotal-ui/react/iconography';
import {Form, Input} from '../pui/form';

let error = true;

export const Jsx = () => (
  <Form {...{
    rows: [{
      cols: [{
        name: 'general-error',
        optional: true
      }]
    }, {
      cols: [{
        name: 'first-name',
        label: 'First Name',
        initialValue: 'Jonathan',
        field: () => <Input id="on-submit-error-first-name"/>
      }, {
        name: 'middle-initial',
        className: 'col-fixed middle-initial',
        label: 'M',
        optional: true,
        optionalText: '(Opt)',
        field: () => <Input id="on-submit-error-middle-initial"/>
      }, {
        name: 'last-name',
        label: 'Last Name',
        initialValue: 'Berney',
        field: () => <Input id="on-submit-error-last-name"/>
      }]
    }, {
      cols: [{
        name: 'address',
        label: 'Street Address',
        initialValue: '875 Howard St.',
        field: () => <Input id="on-submit-error-address"/>
      }]
    }, {
      cols: [{
        name: 'city',
        label: 'City',
        initialValue: 'San Francisco',
        field: () => <Input id="on-submit-error-city"/>
      }, {
        name: 'state',
        className: 'col-fixed',
        label: 'State',
        initialValue: 'CA',
        field: () => (
          <select id="on-submit-error-state">
            <option>CA</option>
            <option>NY</option>
          </select>
        )
      }, {
        name: 'zip-code',
        className: 'col-fixed',
        label: 'Zip Code',
        initialValue: '94000',
        field: () => <Input id="on-submit-error-zip-code"/>
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
    onSubmit: () => new Promise(((res, rej) => setTimeout(() => {
      error ? rej({
        general: 'HTTP RESPONSE CODE 502: GATEWAY ERROR',
        first: 'Should have been named Elliot',
        last: 'Cannot exceed four characters',
        addr1: 'Please specify floor number',
        city: 'Go Giants!'
      }) : res();
      error = !error;
    }, 2000))),
    onSubmitError: e => ({
      'general-error': e.general,
      'first-name': e.first,
      'middle-initial': e.middle,
      'last-name': e.last,
      address: e.addr1,
      city: e.city,
      state: e.state,
      'zip-code': e.zip
    })
  }}/>
);

export const code = `/*
error: {
  general: 'HTTP RESPONSE CODE 502: GATEWAY ERROR',
  first: 'Should have been named Elliot',
  last: 'Cannot exceed four characters',
  addr1: 'Please specify floor number',
  city: 'Go Giants!'
}
*/

<Form {...{
  rows: [{
    cols: [{name: 'general-error', optional: true}]
  }, {
    cols: [{
      name: 'first-name',
      label: 'First Name',
      initialValue: 'Jonathan',
      field: () => <Input/>
    }]
  }],
  onSubmitError: e => ({
    'general-error': e.general,
    'first-name': e.first,
    'middle-initial': e.middle,
    'last-name': e.last,
    address: e.addr1,
    city: e.city,
    state: e.state,
    'zip-code': e.zip
  })
}}/>`;