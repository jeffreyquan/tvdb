import Show from '../models/Show';
import axios, { AxiosResponse, AxiosError } from 'axios';

export const listSearchResults = (req, res) => {
  let query = JSON.parse(req.query.values).name;
  let data;
  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&query=${ query }&include_adult=false`
    )
    .then((response: AxiosResponse) => {
      data = response.data;
      res.json(data);
    })
    .catch((err: AxiosError) => {
      console.log(err);
    });
}