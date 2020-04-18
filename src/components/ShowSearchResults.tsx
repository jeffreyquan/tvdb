import React from 'react';
import { ResponseContext, IResponseContext } from './Form/Form';
import { ShowTile } from './ShowTile';

export const ShowSearchResults = () => {
  
  return (
    <ResponseContext.Consumer>
      {(context: IResponseContext) =>
        Object.keys(context.response).length > 0 &&
        context.response.results.map((result: any) => (
          <ShowTile key={result.id} tmdbId={result.id} name={result.original_name} genreIds={result.genre_ids} firstAirDate={result.first_air_date} overview={result.overview} poster={result.poster_path} added={result.added}/>
        ))
      }
    </ResponseContext.Consumer>
  );
}