import React from 'react';

interface ShowTileProps {
  tmdbId: number;
  name: string,
  genreIds: number[];
  firstAirDate: number;
  overview?: string;
  poster?: string;
}

export const ShowTile: React.FC<ShowTileProps> = ({ name, genreIds, firstAirDate, overview, poster}) => {

  return (
    <>
      <div>{ name }</div>
      <img src={`https://image.tmdb.org/t/p/w188_and_h282_bestv2${ poster }`} alt={ name } />
    </>
  )
}