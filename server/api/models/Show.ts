import mongoose from "mongoose";
import { ICharacter } from "./Character";
import { IGenre } from "./Genre";

const { Schema } = mongoose;

const ShowSchema = new mongoose.Schema(
  { 
    tmdbId: {
      type: Number,
      required: "Show id cannot be blank"
    },
    name: {
      type: String,
      required: "Show name cannot be blank",
    },
    poster: {
      type: String,
    },
    overview: {
      type: String,
    },
    firstAirDate: {
      type: String
    },
    genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character'}]
  },
  { collection: "show" }
);

export interface IShow extends mongoose.Document {
  tmdbId: number;
  name: string;
  poster: string;
  overview: string;
  firstAirDate: string;
  genres: IGenre[];
  characters: ICharacter[];
}

const Show = mongoose.model<IShow>("Show", ShowSchema);

export default Show;
