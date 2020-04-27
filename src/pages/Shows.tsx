import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShowCard } from "../components/ShowCard";
import { IShow } from "../types";
import { CircularProgress } from "@material-ui/core";


export const Shows = () => {

  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState<IShow[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/shows/").then(res => {
      setShows(res.data);
      setLoading(false);
    });
  }, [])

  return (
    <div>
      {!loading ? (
        shows.map((show) => (
          <ShowCard
            key={show._id}
            id={show._id}
            name={show.name}
            genres={show.genres}
            poster={show.poster}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}