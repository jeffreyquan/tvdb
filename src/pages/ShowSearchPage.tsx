import React from 'react';
import { ShowSearchForm } from '../components/ShowSearchForm';
import { ShowSearchResults } from '../components/ShowSearchResults';

export const ShowSearchPage = () => {

  return (
    <div>
      <ShowSearchForm />
      <ShowSearchResults />
    </div>
  )
}