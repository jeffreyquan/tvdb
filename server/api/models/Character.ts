import mongoose from "mongoose";
import { IActor } from "./Actor";
import { IShow } from "./Show";

const { Schema } = mongoose;

const CharacterSchema = new Schema(
  {
    name: {
      type: String,
      required: "Character name cannot be blank",
    },
    actor: {
      type: Schema.Types.ObjectId, ref: 'Actor'
    },
    show: {
      type: Schema.Types.ObjectId,
      ref: 'Show'
    }
  },
  { collection: "character" }
);

export interface ICharacter extends mongoose.Document {
  name: string;
  actor: IActor;
  show: IShow;
}

const Character = mongoose.model<ICharacter>("Character", CharacterSchema);

export default Character;
