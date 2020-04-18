import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

interface ShowTileProps {
  tmdbId: number;
  name: string,
  genreIds: number[];
  firstAirDate: number;
  overview?: string;
  poster?: string;
  added: boolean;
}

export const ShowTile: React.FC<ShowTileProps> = ({ tmdbId, name, genreIds, firstAirDate, overview, poster, added}) => {

  const data = {
    tmdbId,
    name,
    poster,
    firstAirDate,
    overview,
    genreIds
  }

  const addShow = () => {
    axios
    .post("http://localhost:5000/api/shows/add", data)
    .then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <div>{ name }</div>
      <img src={`https://image.tmdb.org/t/p/w188_and_h282_bestv2${ poster }`} alt={ name } />
      {added ?
        <Button variant="contained" color="secondary">Added</Button>
        :
        <Button variant="contained" type="button" color="primary" onClick={addShow}>Add</Button>
      }
    </>
  )
}