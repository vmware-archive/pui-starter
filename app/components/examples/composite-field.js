import React from 'react';
import {AdvancedTable} from 'pivotal-ui/react/table';
import {Form, FormUnit, Input} from '../pui/form';

const noop = () => {
};

const OrgCheckboxCellRenderer = checked => () => <input {...{
  type: 'checkbox',
  checked,
  onChange: noop
}}/>;

const onClick = ({name, state: {current, current: {orgRoles}}, setState}) => () => setState({
  current: {...current, orgRoles: {...orgRoles, [name]: !orgRoles[name]}}
});

const table = ({state, state: {current, current: {orgRoles}}, setState}) => (
  <AdvancedTable {...{
    footerRow: (
      <div {...{
        className: 'tr', onClick: () => {
          const checked = orgRoles.manager && orgRoles.billingManager && orgRoles.auditor;
          setState({
            current: {
              ...current,
              orgRoles: {
                manager: !checked,
                billingManager: !checked,
                auditor: !checked
              }
            }
          });
        }
      }}>
        <FormUnit {...{
          className: 'mvm mhxl',
          inline: true,
          label: 'Select All',
          labelPosition: 'after',
          field: <Input {...{
            type: 'checkbox',
            checked: orgRoles.manager && orgRoles.billingManager && orgRoles.auditor
          }}/>,
          hideHelpRow: true
        }}/>
      </div>
    ),
    columns: [{
      attribute: 'org',
      displayName: 'Org'
    }, {
      attribute: 'orgManager',
      displayName: 'Manager',
      width: '128px',
      CellRenderer: OrgCheckboxCellRenderer(orgRoles.manager),
      onClick: onClick({name: 'manager', state, setState})
    }, {
      attribute: 'orgBillingManager',
      displayName: 'Billing Manager',
      width: '128px',
      CellRenderer: OrgCheckboxCellRenderer(orgRoles.billingManager),
      onClick: onClick({name: 'billingManager', state, setState})
    }, {
      attribute: 'orgAuditor',
      displayName: 'Auditor',
      width: '128px',
      CellRenderer: OrgCheckboxCellRenderer(orgRoles.auditor),
      onClick: onClick({name: 'auditor', state, setState})
    }],
    data: [{
      org: 'amjs-test-org',
      orgManager: orgRoles.manager,
      orgBillingManager: orgRoles.billingManager,
      orgAuditor: orgRoles.auditor
    }]
  }}/>
);

export const Jsx = () => (
  <Form {...{
    rows: [{
      cols: [{
        name: 'orgRoles',
        label: 'Assign Org Roles',
        initialValue: {
          manager: false,
          billingManager: false,
          auditor: false
        },
        field: table
      }]
    }]
  }}/>
);

export const code = `const table = ({state, setState}) => <AdvancedTable {...{/* ... */}}/>

<Form {...{
  rows: [{
    cols: [{
      name: 'orgRoles',
      label: 'Assign Org Roles',
      initialValue: {
        manager: false,
        billingManager: false,
        auditor: false
      },
      field: table
    }]
  }]
}}/>`;