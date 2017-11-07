import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Icon} from 'pivotal-ui/react/iconography';
import {Form, Input} from '../pui/form';

export default () => (
  <Form {...{
    rows: [{
      cols: [{
        name: 'generalError',
        optional: true
      }]
    }, {
      cols: [{
        id: 'on-submit-error-first-name',
        name: 'first-name',
        label: 'First Name',
        initialValue: 'Jonathan',
        field: () => <Input/>
      }, {
        id: 'on-submit-error-middle-initial',
        name: 'middle-initial',
        className: 'col-fixed',
        label: 'M',
        optional: true,
        optionalText: '(Opt)',
        field: () => <Input style={{width: '48px'}}/>
      }, {
        id: 'on-submit-error-last-name',
        name: 'last-name',
        label: 'Last Name',
        initialValue: 'Berney',
        field: () => <Input/>
      }]
    }, {
      cols: [{
        id: 'on-submit-error-address',
        name: 'address',
        label: 'Street Address',
        initialValue: '875 Howard St.',
        field: () => <Input/>
      }]
    }, {
      cols: [{
        id: 'on-submit-error-city',
        name: 'city',
        label: 'City',
        initialValue: 'San Francisco',
        field: () => <Input/>
      }, {
        id: 'on-submit-error-state',
        name: 'state',
        className: 'col-fixed',
        label: 'State',
        initialValue: 'CA',
        field: () => (
          <select>
            <option>CA</option>
            <option>NY</option>
          </select>
        )
      }, {
        id: 'on-submit-error-zip-code',
        name: 'zip-code',
        className: 'col-fixed',
        label: 'Zip Code',
        initialValue: '94000',
        field: () => <Input/>
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
    onSubmit: () => new Promise(((res, rej) => setTimeout(() => Math.random() > .9 ? res() : rej({
      'first-name': 'Should have been named Elliot',
      'last-name': 'Cannot exceed four characters',
      address: 'Please specify floor number',
      city: 'Go Giants!',
      generalError: 'HTTP RESPONSE CODE 502: GATEWAY ERROR'
    }), 2000))),
    onSubmitError: e => e
  }}/>
);