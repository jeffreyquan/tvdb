import Show from '../models/Show';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Genre, { IGenre } from '../models/Genre';
import Actor, { IActor } from '../models/Actor';
import Character from '../models/Character';

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

  let actors;

  const fetchActors = async() => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tmdbId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );

    actors = response.data["cast"];

    return Promise.all(actors.map(actor => Actor.findOne({ tmdbId: actor["id"] })))
  }

  const fetchGenresAndActors = () => {
    return Promise.all([
      findGenres(), fetchActors()
    ])
  }

  fetchGenresAndActors().then(data => {
    data[0].forEach((genre: IGenre) => {
      newShow.genres.push(genre);
      genre.shows.push(newShow);
      genre.save();
    });

    data[1].forEach((actor, index) => {
      let newCharacter = new Character();
      newCharacter.name = actors[index]["character"];
      if (actor === null) {
        let newActor = new Actor();
        newActor.tmdbId = actors[index]["id"]; 
        newActor.name = actors[index]["name"];
        newActor.poster = actors[index]["profile_path"];
        newActor.characters.push(newCharacter);
        newCharacter.save();
        newShow.characters.push(newCharacter);
        newActor.save();
      } else {
        newCharacter.actor = actor as IActor;
        newCharacter.save();
        newShow.characters.push(newCharacter);
      }
    })

    newShow.save();
    res.json(newShow);
  })
}
