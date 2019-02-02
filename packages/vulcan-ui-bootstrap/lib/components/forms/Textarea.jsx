import React from 'react';
import Form from 'react-bootstrap/Form';
import { Components, registerComponent } from 'meteor/vulcan:core';

const TextareaComponent = ({ refFunction, inputProperties, itemProperties }) => (
  <Components.FormItem {...inputProperties} {...itemProperties}>
    <Form.Control as="textarea" ref={refFunction} {...inputProperties} />
  </Components.FormItem>
);

registerComponent('FormComponentTextarea', TextareaComponent);
