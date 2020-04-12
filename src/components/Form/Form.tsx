import React, { useState } from "react";
import axios from 'axios';

export interface IFormContext extends IFormState {
  setValues: (values: IValues) => void
}

export const FormContext = React.createContext<IFormContext | any>(undefined);

export interface IResponseContext extends IResponseState {

}

export const ResponseContext = React.createContext<IResponseContext | any>(undefined);

interface IFormProps {
  action: string;
  render: () => React.ReactNode;
  renderResponse?: () => React.ReactNode;
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: string;
}

export interface IResponse {
  [key: string]: any;
}

export interface IResponseState {
  response: IResponse
}

export interface IFormState {
  values: IValues;
  errors: IErrors;
  submitSuccess?: boolean;
}

export const Form: React.FC<IFormProps> = ({ action, render, renderResponse }) => {

  const errors: IErrors = {};
  const values: IValues = {};
  const initialResponse: IResponse = {};

  const [state, setState] = useState<IFormState>({ errors, values });

  const [response, setResponse] = useState<IResponseState>({ response: initialResponse });

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
      },
    })
  }

  const validateForm = (): boolean => {
    return true;
  }

  const submitForm = () => {
      axios.get(action, {
       params: {
         values: state.values
       }
      })
      .then((res) => {
        setResponse({
          response: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
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

  const responseContext: IResponseContext = response;

  return (
    <>
      <FormContext.Provider value={context}>
        <form onSubmit={handleSubmit}>
          <div>{render()}</div>
          <button type="submit" disabled={haveErrors(errors)}>
            Submit
          </button>
        </form>
        <ResponseContext.Provider
          value={responseContext}
        >
          {renderResponse ?
            (<div>{renderResponse()}</div>)
            :
            ''
          }
        </ResponseContext.Provider>
      </FormContext.Provider>
    </>
  );
}