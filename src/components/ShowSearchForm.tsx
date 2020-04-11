import React from 'react';
import { Form } from './Form/Form';
import { Field } from './Form/Field';

export const ShowSearchForm: React.FC = () => {
  return (
    <Form
      action="#"
      render={() => (
        <>
          <Field id="name" label="Name" />
        </>
      )}
    />
  )
}