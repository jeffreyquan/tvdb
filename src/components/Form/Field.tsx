import React from 'react';
import { IErrors, IFormContext, FormContext } from './Form';

type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IFieldProps {
  id: string;
  label?: string;
  editor?: Editor;
  options?: string[];
  value?: any;
}

export const Field: React.FC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value
}) => {
  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div>
          {label && <label htmlFor={id}>{label}</label>}

          {editor!.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
            />
          )}

          {editor!.toLowerCase() === "multilinetextbox" && (
            <textarea
              id={id}
              value={value}
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
            />
          )}

          {editor!.toLowerCase() === "dropdown" && (
            <select
              id={id}
              name={id}
              value={value}
              onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                context.setValues({ [id]: e.currentTarget.value })
              }
            >
              {options &&
                options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          )}
        </div>
      )}
    </FormContext.Consumer>
  );
}

Field.defaultProps = {
  editor: "textbox"
};