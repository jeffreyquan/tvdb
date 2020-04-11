import React, { useContext } from 'react';
import { FormContext } from './Form/Form';


export const ShowSearchResults = () => {
  const results = useContext(FormContext);
  console.log(results);
  return (
    <div>
      Hello
    </div>
  )
}