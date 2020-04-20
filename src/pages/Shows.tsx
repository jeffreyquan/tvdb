import React, { useState, useEffect } from "react";
import axios from "axios";


export const Shows = () => {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:5000/api/shows/").then(res => {
      console.log(res);
    });
  }, [])

  return (
    <div>

    </div>
  )
}