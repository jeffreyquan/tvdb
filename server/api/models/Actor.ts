import mongoose from "mongoose";
import { ICharacter } from "./Character";

const { Schema } = mongoose;

const ActorSchema = new Schema(
  {
    tmdbId: {
      type: Number,
      required: "Actor id cannot be blank",
    },
    name: {
      type: String,
      required: "Actor name cannot be blank",
    },
    poster: {
      type: String,
    },
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }]
  },
  { collection: "actor" }
);

export interface IActor extends mongoose.Document {
  tmdbId: number;
  name: string;
  poster: string;
  characters: ICharacter[]
}

const Actor = mongoose.model<IActor>("Actor", ActorSchema);

export default Actor;
