import Show from '../models/Show';
import axios from 'axios';

export const listSearchResults = (req, res) => {
  console.log(JSON.parse(req.query.values));
  // axios
  //   .get(
  //     `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1&query=${}&include_adult=false`
  //   )
  //   .then((res) => {
  //     console.log(res);
  //   });
}