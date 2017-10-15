import React from 'react';
import {DefaultButton, PrimaryButton} from 'pivotal-ui/react/buttons'
import {FormUnit, Form, Input} from './pui/forms'

export default class FormPage extends React.Component {
  componentDidMount() {
    require('pivotal-ui/css/buttons');
    require('pivotal-ui/css/typography');
    require('pivotal-ui/css/whitespace');
  }

  render() {
    return (
      <div className="form-page">
        <h1 className="mbxxxl">Anatomy of the form unit</h1>
        <FormUnit {...{
          input: <Input placeholder="Input"/>
        }}/>
        <FormUnit {...{
          className: 'mbxxxxl',
          label: 'Email',
          info: 'some info',
          optional: true,
          input: <Input placeholder="Enter email"/>,
          helpBlock: 'The format is generally name@website.com'
        }}/>
        <Form {...{
          className: 'mbxxxxl',
          rows: [[{
            label: 'Email',
            input: <Input placeholder="Enter email"/>,
            helpBlock: 'The format is generally name@website.com'
          }], [{
            label: 'Email',
            input: <Input placeholder="Enter email"/>,
            helpBlock: 'The format is generally name@website.com'
          }]]
        }}/>
        <Form {...{
          className: 'mbxxxxl',
          rows: [[{
            label: 'Email',
            input: <Input placeholder="Enter email"/>
          }], [{
            label: 'Email',
            input: <Input placeholder="Enter email"/>
          }]]
        }}/>
        <Form {...{
          className: 'mbxxxxl',
          rows: [[{
            input: <Input placeholder="Enter email"/>
          }], [{
            input: <Input placeholder="Enter email"/>
          }]]
        }}/>
        <hr/>
        <h1 className="mbxxxl">States</h1>
        <h3>Disabled</h3>
        <Form {...{
          rows: [[{
            label: 'Email',
            input: <Input {...{
              placeholder: 'Enter email',
              disabled: true
            }}/>
          }]]
        }}/>
        <h3>ReadOnly</h3>
        <Form {...{
          rows: [[{
            label: 'Email',
            input: <Input {...{
              placeholder: 'Enter email',
              readOnly: true
            }}/>
          }]]
        }}/>
        <h3>Info Icon</h3>
        <Form {...{
          rows: [[{
            label: 'Email',
            info: 'The light tooltip is used for an explanation of an important item. The medium size width is good for 3 lines of text.',
            optional: true,
            input: <Input {...{placeholder: 'Enter email',}}/>
          }]]
        }}/>
        <h3>Optional</h3>
        <Form {...{
          rows: [[{
            label: 'Email',
            info: 'some info',
            optional: true,
            input: <Input {...{placeholder: 'Enter email',}}/>
          }]]
        }}/>
        <h3>Optional</h3>
        <Form {...{
          rows: [[{
            label: 'Email',
            optional: true,
            input: <Input {...{placeholder: 'Enter email',}}/>
          }]]
        }}/>
        <hr/>
        <h3>Large Size</h3>
        <Form {...{
          rows: [[{
            size: 'lg',
            label: 'Large Label',
            input: <Input {...{
              size: 'lg',
              placeholder: 'Large Input',
            }}/>
          }, {
            size: 'lg',
            label: 'Large Select',
            input: (<select {...{
              className: 'input-lg',
              placeholder: 'Select',
            }}>
              <option disabled>Select</option>
            </select>)
          }]]
        }}/>
        <hr/>
        <h3>Small Size</h3>
        <Form {...{
          rows: [[{
            size: 'sm',
            label: 'Small Label',
            input: <Input {...{
              size: 'sm',
              placeholder: 'Small Label',
            }}/>
          }, {
            size: 'sm',
            label: 'Small Select',
            input: (<select {...{
              className: 'input-sm',
              placeholder: 'Select',
            }}>
              <option disabled>Select</option>
            </select>)
          }]]
        }}/>
        <hr/>
        <h1 className="mbxxxl">Block Forms</h1>
        <Form {...{
          style: {
            border: '2px solid #e2f3fe',
            borderRadius: '4px',
            width: '688px',
            padding: '16px'
          },
          rows: [[{
            label: 'Instance Name',
            info: 'some info',
            input: <Input/>
          }], [{
            label: 'Add to Space',
            input: (<select className="select">
              <option>Development</option>
            </select>)
          }], [{
            label: 'Bind to App',
            optional: true,
            input: (<select className="select">
              <option>App-101-g3</option>
            </select>)
          }], [{
            label: 'Bind to Route',
            optional: true,
            input: (<select className="select">
              <option>[do not bind]</option>
            </select>)
          }, {
            fixed: true,
            input: <DefaultButton alt>Create Route</DefaultButton>
          }], [{
            label: <h4>Additional Configuration</h4>
          }], [{}, {
            className: 'mtl',
            fixed: true,
            input: (<div>
              <PrimaryButton alt>Cancel</PrimaryButton>
              <PrimaryButton>Create</PrimaryButton>
            </div>)
          }]]
        }}/>
        <hr/>
        <h1 className="mbxxxl">Inline-Block Forms</h1>
        <h3>Inline-Block Format</h3>
        <Form {...{
          rows: [[{
            label: 'Email',
            helpBlock: 'The format is generally name@website.com',
            input: <Input {...{placeholder: 'Enter email'}}
                          style={{display: 'inline-block'}}/>
          }, {
            label: 'Password',
            input: <Input type="password"/>
          }, {
            fixed: true,
            input: <PrimaryButton>Sign In</PrimaryButton>
          }]]
        }}/>
        <h3 className="mtxxxl">Two Column Form</h3>
        <Form {...{
          rows: [[{
            label: 'FirstName',
            input: <Input {...{placeholder: 'First name'}}/>
          }, {
            label: 'Last Name',
            input: <Input {...{placeholder: 'Last Name'}}/>
          }], [{
            label: 'Email',
            helpBlock: 'The format is generally name@website.com',
            input: <Input {...{placeholder: 'Enter email'}}/>
          }, {
            label: 'Password',
            input: <Input type="password"/>
          }], [{
            label: 'Street',
            input: (<div className="grid">
              <div className="col">
                <Input {...{placeholder: 'Street address'}}/>
              </div>
              <div className="col col-fixed">
                <DefaultButton alt>Generate</DefaultButton>
              </div>
            </div>)
          }, {
            label: 'City',
            input: <Input {...{placeholder: 'City name'}}/>
          }], [{
            label: 'State',
            input: (<select className="select">
              <option disabled>Select a state</option>
            </select>)
          }, {
            label: 'Country',
            input: (<select className="select">
              <option disabled>Select a country</option>
            </select>)
          }], [{}, {
            className: 'mtl',
            fixed: true,
            input: (<div>
              <PrimaryButton alt>Cancel</PrimaryButton>
              <PrimaryButton>Create</PrimaryButton>
            </div>)
          }]]
        }}/>
      </div>
    );
  }
}