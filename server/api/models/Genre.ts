import mongoose from 'mongoose';

const { Schema } = mongoose;

const GenreSchema = new Schema({
  tmdbId: {
    type: Number,
    required: 'Genre id cannot be blank'
  },
  name: {
    type: String,
    required: 'Genre name cannot be blank'
  },
  shows: [{ type: Schema.Types.ObjectId, ref: 'Show' }]
}, { collection: 'genre' })

const Genre = mongoose.model('Genre', GenreSchema);

export default Genre;