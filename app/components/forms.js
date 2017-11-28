import React from 'react';
import {Form, FormRow, FormCol} from 'pivotal-ui/react/forms';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Input} from 'pivotal-ui/react/inputs';
import {Toggle} from 'pivotal-ui/react/toggle';
import {pepper} from '../../helpers/application_helper';
import {post} from '../../helpers/fetch_helper';

export default class FormExample extends React.Component {
  render() {
    return (
      <Form {...{
        resetOnSubmit: true,
        onSubmit: ({current}) => post('', current)
      }}>
        <FormRow>
          <FormCol name="name" label="Name">
            <Input/>
          </FormCol>
          <FormCol fixed name="price" label="Price" validator={value => {
            if (+value < 0) return 'we need to make money!';
          }}>
            <Input type="number"/>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol inline optional name="spiciness" label="Spiciness"
                   tooltip="There is only spicy!!" tooltipSize="sm" optionalText="">
            <select>
              <option value="0"/>
              <option value="1">{pepper}</option>
              <option value="2">{pepper}{pepper}</option>
              <option value="3">{pepper}{pepper}{pepper}</option>
              <option value="4">{pepper}{pepper}{pepper}{pepper}</option>
              <option value="5">{pepper}{pepper}{pepper}{pepper}{pepper}</option>
            </select>
          </FormCol>
          <FormCol fixed inline name="glutenFree" label="Gluten Free" labelPosition="after" optional optionalText="">
            <Input type="checkbox"/>
          </FormCol>
          <FormCol fixed inline name="seasonal" label="Seasonal" labelPosition="after" optional optionalText="">
            <Toggle/>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol optional name="description" label="Description">
            <textarea/>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            {({canReset, reset}) => <PrimaryButton alt disabled={!canReset()} onClick={reset}>Reset</PrimaryButton>}
          </FormCol>
          <FormCol className="txt-r">
            {({canSubmit}) => <PrimaryButton type="submit" disabled={!canSubmit()}>Submit</PrimaryButton>}
          </FormCol>
        </FormRow>
      </Form>
    );
  }
};