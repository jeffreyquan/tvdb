import React, { useState } from "react";
import axios from 'axios';

export interface IFormContext extends IFormState {
  setValues: (values: IValues) => void
}

export const FormContext = React.createContext<IFormContext | any>(undefined);

interface IFormProps {
  action: string;
  render: () => React.ReactNode;
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: string;
}

export interface IFormState {
  values: IValues;
  errors: IErrors;
  submitSuccess?: boolean;
}

export const Form: React.FC<IFormProps> = ({ action, render }) => {

  const errors: IErrors = {};
  const values: IValues = {};

  const [state, setState] = useState<IFormState>({ errors, values });

  const haveErrors = (errors: IErrors): boolean => {
    let haveError: boolean = false;
    haveError = Object.keys(errors).some((key: string) =>  (errors[key].length > 0));
    return haveError;
  }

  const setValues = (values: IValues) => {
    setState({
      values: {
        ...state.values,
        ...values
      },
      errors: {
        ...state.errors
      }
    })
  }

  const validateForm = (): boolean => {
    return true;
  }

  const submitForm = (): boolean => {
      axios.get(action, {
       params: {
         values: state.values
       }
      })
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err) => {
        return false;
      })
      return false;
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    console.log(state.values);

    submitForm();

    // if (validateForm()) {
    //   const submitSuccess: boolean = submitForm();
    //   setState({
    //     ...state,
    //     submitSuccess
    //   });
    // }
  }

  const context: IFormContext = {
    ...state,
    setValues: setValues,
  };

  return (
    <FormContext.Provider value={context}>
      <form onSubmit={handleSubmit}>
        <div>{render()}</div>
        <button type="submit" disabled={haveErrors(errors)}>
          Submit
        </button>
      </form>
    </FormContext.Provider>
  );
}