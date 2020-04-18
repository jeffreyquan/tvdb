import Show from '../models/Show';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Genre, { IGenre } from '../models/Genre';

export const listSearchResults = async (req, res) => {
  let query = JSON.parse(req.query.values).name;

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&query=${ query }&include_adult=false`
  );

  if (response.data.results.length > 0) {
    const updateShows = async() => {
      return Promise.all(
        response.data.results.map(show => {
        let tmdbId = show["id"];
        return Show.findOne({ tmdbId });
      })) 
    }
    updateShows().then(foundShows => {
      const updatedShows = response.data.results.map((show, index) => {
        if (foundShows[index] === null) {
          show.added = false;
        } else {
          show.added = true;
        }
        return show;
      })
      response.data.results = updatedShows;
      res.json(response.data);
    })
  } else {
    res.json(response.data);
  }
}
  
export const addShow = async (req, res) => {
  console.log(req.body);
  const { tmdbId, name, poster, firstAirDate, overview, genreIds } = req.body;

  const newShow = new Show({
    tmdbId,
    name,
    poster,
    firstAirDate,
    overview
  });

  const findGenres = async() => {
    return Promise.all(genreIds.map(tmdbId => Genre.findOne({ tmdbId })));
  }

  findGenres().then(genres => {
    genres.forEach((genre: IGenre) => {
      newShow.genres.push(genre);
    })

    newShow.save();
  })
}
