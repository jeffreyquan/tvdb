import mongoose from 'mongoose';
import { IShow } from './Show';

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

export interface IGenre extends mongoose.Document {
  tmdbId: number;
  name: string;
  shows: IShow[]
}

const Genre = mongoose.model<IGenre>('Genre', GenreSchema);

export default Genre;