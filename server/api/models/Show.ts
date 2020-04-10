import mongoose from "mongoose";

const { Schema } = mongoose;

const ShowSchema = new Schema(
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
    genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character'}]
  },
  { collection: "show" }
);

const Show = mongoose.model("Show", ShowSchema);

export default Show;
