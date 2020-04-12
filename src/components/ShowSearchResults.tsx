import React from 'react';
import { ResponseContext, IResponseContext } from './Form/Form';

export const ShowSearchResults = () => {
  
  return (
    <ResponseContext.Consumer>
      {(context: IResponseContext) =>
        Object.keys(context.response).length > 0 &&
        context.response.results.map((result: any, index: number) => (
          <div key={index}>{result.original_name}</div>
        ))
      }
    </ResponseContext.Consumer>
  );
}