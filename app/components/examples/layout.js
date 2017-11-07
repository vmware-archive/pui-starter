import React from 'react';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Icon} from 'pivotal-ui/react/iconography';
import {Form, Input} from '../pui/form';

export default () => (
  <Form {...{
    rows: [{
      cols: [{
        id: 'layout-first-name',
        name: 'first-name',
        label: 'First Name',
        field: () => <Input/>
      }, {
        id: 'layout-middle-initial',
        name: 'middle-initial',
        className: 'col-fixed',
        label: 'M',
        optional: true,
        optionalText: '(Opt)',
        field: () => <Input style={{width: '48px'}}/>
      }, {
        id: 'layout-last-name',
        name: 'last-name',
        label: 'Last Name',
        field: () => <Input/>
      }]
    }, {
      cols: [{
        id: 'layout-address',
        name: 'address',
        label: 'Street Address',
        field: () => <Input/>
      }]
    }, {
      cols: [{
        id: 'layout-city',
        name: 'city',
        label: 'City',
        field: () => <Input/>
      }, {
        id: 'layout-state',
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
        id: 'layout-zip-code',
        name: 'zip-code',
        className: 'col-fixed',
        label: 'Zip Code',
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
    onSubmit: () => new Promise((res => setTimeout(res, 2000)))
  }}/>
);