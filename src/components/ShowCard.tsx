import React from "react";
import { IGenre } from "../types";
import { Link } from "react-router-dom";

interface ShowCardProps {
  id: string;
  name: string;
  poster?: string;
  genres: IGenre[];
}

export const ShowCard: React.FC<ShowCardProps> = ({
  id,
  name,
  poster,
  genres
}) => {

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w188_and_h282_bestv2${poster}`}
        alt={name}
      />
      <Link to={`/show/${id}`}>{name}</Link>
    </div>
  );
}