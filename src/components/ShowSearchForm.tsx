import React from 'react';
import { Form } from './Form/Form';
import { Field } from './Form/Field';

export const ShowSearchForm: React.FC = () => {
  return (
    <Form
      action="http://localhost:5000/api/shows/search"
      render={() => (
        <>
          <Field id="name" label="Name" />
        </>
      )}
    />
  );
}