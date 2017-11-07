import React from 'react';

class Example extends React.Component {
  render() {
    const {title, description, example} = this.props;
    const Child = require(`./examples/${example}`);
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Child/>
        <hr/>
      </div>
    );
  }
}

export default class FormPage extends React.Component {
  componentDidMount() {
    require('pivotal-ui/css/alignment');
    require('pivotal-ui/css/buttons');
    require('pivotal-ui/css/flex-grids');
    require('pivotal-ui/css/forms');
    require('pivotal-ui/css/tooltips');
    require('pivotal-ui/css/typography');
    require('pivotal-ui/css/whitespace');
  }

  render() {
    return (
      <div className="form-page">
        <Example {...{
          title: 'Grid layout of fields',
          description: 'Form elements are laid out in an 8pt flex grid via a JSON interface.',
          example: 'layout'
        }}/>
        <Example {...{
          title: 'Form Unit',
          description: 'Composed of a label, tooltip, optional text, field, and help/error text.',
          example: 'form-unit'
        }}/>
        <Example {...{
          title: 'Initial Value',
          description: 'A Form Unit can be provided an initial value. The reset callback can be attached to a button to reset all fields to their initial values',
          example: 'initial-value'
        }}/>
        <Example {...{
          title: 'Inline Form Unit',
          description: 'Form Units can also be laid out horizontally, with labels before or after the field. The login form below has an afterSubmit callback that resets the username and password.',
          example: 'inline-form-unit'
        }}/>
        <Example {...{
          title: 'Composite Field',
          description: 'Form Unit fields can be complex composites. This Form Unit\'s field is a PUI Table. Its state is an object with three booleans, for each checkbox. The Select All checkbox is able to read and update the state of each field.',
          example: 'composite-field'
        }}/>
        <Example {...{
          title: 'Disable Fields While Submitting',
          description: 'When submitting, all fields are disabled. A prop is passed to composite fields so that they can render themselves as disabled.',
          example: 'disable-while-submitting'
        }}/>
        <Example {...{
          title: 'Submission Error Handling',
          description: 'This form has a 10% chance of success. An onSubmitError callback can parse the error and assign parts of it to specific fields, or to a general error area. The form can then be reset, or re-submitted. When submission succeeds, the errors disappear from the form.',
          example: 'on-submit-error'
        }}/>
      </div>
    );
  }
}