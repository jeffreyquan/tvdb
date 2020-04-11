import React from 'react';
import { ResultsContext, IResultsContext } from './Form';

export const Results: React.FC = () => {
  
  return (
    <ResultsContext.Consumer>
      {(context: IResultsContext) => (
        context.results.results !== undefined && context.results.results.map((result: any, index: number) => <div key={index}>{result.original_name}</div>)
      )}
    </ResultsContext.Consumer>
  )
}