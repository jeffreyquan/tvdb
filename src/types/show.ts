export interface IGenre {
  _id: string;
  name: string;
  shows?: IShow[];
  tmdbId?: number;
}

export interface IShow {
  _id: string;
  id: string;
  tmdbId: number;
  name: string;
  poster: string;
  overview: string;
  firstAirDate: string;
  genres: IGenre[];
  characters: ICharacter[];
}

export interface ICharacter {
  _id: string;
  name: string;
  actor: IActor;
  show: IShow;
}

export interface IActor {
  _id: string;
  tmdbId: number;
  name: string;
  poster: string;
  characters: ICharacter[];
}