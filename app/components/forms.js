import React from 'react';
import {Form, FormRow, FormCol} from 'pivotal-ui/react/forms';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Input} from 'pivotal-ui/react/inputs';
import {Toggle} from 'pivotal-ui/react/toggle';
import {pepperOptions} from '../../helpers/application_helper';
import {post} from '../../helpers/fetch_helper';

export default class FormExample extends React.Component {
  render() {
    return (
      <Form resetOnSubmit={true} onSubmit={({current}) => {
        post('/addMenuItem', current);
      }}>
        <FormRow>
          <FormCol name="name" label="Name">
            <input/>
          </FormCol>
          <FormCol name="price" label="Price" fixed validator={val => {
            if (+val < 0) return 'we need to make money!!'
          }}>
            <input type="number"/>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol name="spiciness" label="Spiciness" tooltip="there is only spicy!!" tooltipSize="sm" inline optional>
            <select>
              {pepperOptions}
            </select>
          </FormCol>
          <FormCol name="glutenFree" label="Gluten Free" inline fixed labelPosition="after" optional optionalText="">
            <input type="checkbox"/>
          </FormCol>
          <FormCol name="seasonal" label="Seasonal" inline fixed labelPosition="after" optional optionalText="">
            <Toggle/>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol name="description" label="Description" optional>
            <textarea/>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            {({canReset, reset}) => <PrimaryButton alt disabled={!canReset()} onClick={reset}>Reset</PrimaryButton>}
          </FormCol>
          <FormCol fixed>
            {({canSubmit}) => <PrimaryButton type="submit" disabled={!canSubmit()}>Submit</PrimaryButton>}
          </FormCol>
        </FormRow>
      </Form>
    );
  }
};