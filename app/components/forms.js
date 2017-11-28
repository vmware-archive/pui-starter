import React from 'react';
import {Form, FormRow, FormCol} from 'pivotal-ui/react/forms';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Input} from 'pivotal-ui/react/inputs';
import {Toggle} from 'pivotal-ui/react/toggle';
import {pepper} from '../../helpers/application_helper';

export default class FormExample extends React.Component {
  render() {
    return (
      <Form>
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
          <FormCol inline name="spiciness" label="Spiciness"
                   tooltip="There is only spicy!!" tooltipSize="sm">
            <select>
              <option>{pepper}</option>
              <option>{pepper}{pepper}</option>
              <option>{pepper}{pepper}{pepper}</option>
            </select>
          </FormCol>
          <FormCol fixed inline name="gluten-free" label="Gluten Free" labelPosition="after">
            <Input type="checkbox"/>
          </FormCol>
          <FormCol fixed inline name="seasonal" label="Seasonal" labelPosition="after">
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
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </FormCol>
        </FormRow>
      </Form>
    );
  }
};