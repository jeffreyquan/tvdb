import mongoose from "mongoose";

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

const Character = mongoose.model("Character", CharacterSchema);

export default Character;
