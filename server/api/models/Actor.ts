import mongoose from "mongoose";

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

const Actor = mongoose.model("Actor", ActorSchema);

export default Actor;
